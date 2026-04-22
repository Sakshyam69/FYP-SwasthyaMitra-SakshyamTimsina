import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import doctorModel from "../models/doctorModel.js";
import hospitalModel from "../models/hospitalModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Read and parse doctor.json
const readDoctorData = () => {
  try {
    const rootPath = path.resolve(__dirname, "../../doctor.json");
    const data = fs.readFileSync(rootPath, "utf8");
    const doctors = JSON.parse(data);
    console.log(`📄 Found ${doctors.length} doctors in JSON file`);
    return doctors;
  } catch (error) {
    console.error("❌ Error reading doctor.json:", error.message);
    console.error("   Make sure doctor.json exists in the project root");
    process.exit(1);
  }
};

// Import doctors to database
const importDoctors = async () => {
  try {
    await connectDB();

    const doctors = readDoctorData();
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log("\n🚀 Starting doctor import...\n");

    for (const doctor of doctors) {
      try {
        const existingDoctor = await doctorModel.findOne({ email: doctor.email });

        if (existingDoctor) {
          console.log(`⏭️  Skipping "${doctor.name}" - email already exists: ${doctor.email}`);
          skipCount++;
          continue;
        }

        // Validate required fields
        if (
          !doctor.name ||
          !doctor.email ||
          !doctor.password ||
          !doctor.speciality ||
          !doctor.degree ||
          !doctor.experience ||
          !doctor.about ||
          doctor.fees == null ||
          !doctor.address
        ) {
          throw new Error("Missing required fields");
        }

        if (doctor.password.length < 8) {
          throw new Error("Password must be at least 8 characters");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(doctor.password, salt);

        // If doctor.json does not include hospitals, auto-link by location (demo-friendly).
        // This makes "search hospital -> view doctors -> book" work immediately after import,
        // assuming hospitals were imported first.
        let hospitalsArr = Array.isArray(doctor.hospitals) ? doctor.hospitals : [];
        if (!hospitalsArr.length) {
          const line1 = String(doctor.address?.line1 || "").trim();
          const line2 = String(doctor.address?.line2 || "").trim();

          if (line1 || line2) {
            const or = [];
            if (line2) or.push({ "address.line2": line2 });
            if (line1) or.push({ "address.line1": line1 });

            const matches = await hospitalModel
              .find(or.length ? { $or: or } : {})
              .select(["_id"])
              .limit(3)
              .lean();

            hospitalsArr = (matches || []).map((h) => h._id);
          }
        }

        const doctorData = {
          name: doctor.name,
          email: doctor.email,
          password: hashedPassword,
          image: doctor.image || "",
          speciality: doctor.speciality,
          degree: doctor.degree,
          experience: String(doctor.experience),
          about: doctor.about,
          available: doctor.available !== undefined ? doctor.available : true,
          fees: Number(doctor.fees),
          address:
            typeof doctor.address === "object"
              ? doctor.address
              : { line1: "", line2: "" },
          hospitals: hospitalsArr,
          date: doctor.date || Date.now(),
          slots_booked: doctor.slots_booked && typeof doctor.slots_booked === "object" ? doctor.slots_booked : {},
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        console.log(`✅ Added: ${doctor.name} (${doctor.speciality})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error importing "${doctor.name}":`, error.message);
        errors.push({ doctor: doctor.name, error: error.message });
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
      errors.forEach(({ doctor, error }) => {
        console.log(`   - ${doctor}: ${error}`);
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
importDoctors();
