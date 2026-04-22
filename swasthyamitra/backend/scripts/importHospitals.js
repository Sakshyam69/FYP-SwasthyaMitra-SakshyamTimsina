import mongoose from "mongoose";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import hospitalModel from "../models/hospitalModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeType = (hospital) => {
  const directType = (hospital.type || hospital.hospital_type || "").toString().trim();
  if (["Government", "Private", "Community"].includes(directType)) return directType;

  const name = (hospital.name || "").toLowerCase();
  if (name.includes("pvt") || name.includes("private") || name.includes("ltd")) return "Private";
  if (name.includes("government") || name.includes("govt") || name.includes("provincial") || name.includes("district hospital")) {
    return "Government";
  }
  return "Community";
};

// Connect to MongoDB
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI not set in .env");
    process.exit(1);
  }

  try {
    const dbName = process.env.MONGODB_DB || "test";
    await mongoose.connect(uri, {
      dbName,
      bufferCommands: false,
    });
    console.log(`✅ MongoDB connected successfully (db: ${dbName})`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Read and parse hospital source JSON
const readHospitalData = () => {
  const candidatePaths = [
    path.resolve(__dirname, "../../../../scripts/output/nepal_all_health_facilities.json"),
    path.resolve(__dirname, "../../../../scripts/output/nepal_hospitals.json"),
    path.resolve(__dirname, "../../../scripts/output/nepal_hospitals.json"),
    path.resolve(__dirname, "../../hospital.json"),
  ];

  try {
    for (const jsonPath of candidatePaths) {
      if (!fs.existsSync(jsonPath)) continue;
      const data = fs.readFileSync(jsonPath, "utf8");
      const hospitals = JSON.parse(data);
      console.log(`📄 Found ${hospitals.length} hospitals in ${jsonPath}`);
      return hospitals;
    }

    throw new Error("No supported hospital JSON file found");
  } catch (error) {
    console.error("❌ Error reading hospital source JSON:", error.message);
    console.error("   Expected one of:");
    for (const jsonPath of candidatePaths) {
      console.error(`   - ${jsonPath}`);
    }
    process.exit(1);
  }
};

// Import hospitals to database
const importHospitals = async () => {
  try {
    await connectDB();

    const hospitals = readHospitalData();
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log("\n🚀 Starting hospital import...\n");

    for (let i = 0; i < hospitals.length; i++) {
      const hospital = hospitals[i];
      try {
        const normalizedName = (hospital.name || "").trim();
        if (!normalizedName) {
          throw new Error("Missing required field: name");
        }

        const normalizedType = normalizeType(hospital);

        const normalizedAddress = hospital.address && typeof hospital.address === "object"
          ? hospital.address
          : { line1: (hospital.address || hospital.district || "").toString(), line2: (hospital.province || "").toString() };

        const normalizedPhone = (hospital.phone || "").toString().trim();
        const normalizedEmailRaw = (hospital.email || "").toString().trim().toLowerCase();
        const normalizedEmail = EMAIL_REGEX.test(normalizedEmailRaw) ? normalizedEmailRaw : "";

        // Check duplicate by name + location. Email is often missing in source data.
        const existingHospital = await hospitalModel.findOne({
          name: normalizedName,
          "address.line1": normalizedAddress.line1,
          "address.line2": normalizedAddress.line2,
        });

        if (existingHospital) {
          console.log(`⏭️  Skipping "${normalizedName}" - already exists`);
          skipCount++;
          continue;
        }

        // Create hospital document
        const hospitalData = {
          name: normalizedName,
          address: normalizedAddress,
          phone: normalizedPhone,
          email: normalizedEmail,
          type: normalizedType,
          image: (hospital.image || hospital.image_url || "").toString().trim(),
          description: hospital.description || "",
          isActive: hospital.isActive !== undefined ? hospital.isActive : true,
          date: hospital.date || Date.now(),
        };

        const newHospital = new hospitalModel(hospitalData);
        await newHospital.save();

        console.log(`✅ Added: ${normalizedName} (${normalizedType})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error importing "${hospital.name}":`, error.message);
        errors.push({ hospital: hospital.name, error: error.message });
        errorCount++;
      }
    }

    // Summary
    console.log("\n" + "=".repeat(50));
    console.log("📊 Import Summary:");
    console.log(`   ✅ Successfully imported: ${successCount}`);
    console.log(`   ⏭️  Skipped (duplicates): ${skipCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log("=".repeat(50));

    if (errors.length > 0) {
      console.log("\n⚠️  Errors encountered:");
      errors.forEach(({ hospital, error }) => {
        console.log(`   - ${hospital}: ${error}`);
      });
    }

    await mongoose.connection.close();
    console.log("\n✅ Import completed. Database connection closed.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Fatal error:", error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
};

// Run the import
importHospitals();
