import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));
  const uri = process.env.MONGODB_URI;
  console.log("Checking environment variables...");
  console.log("MONGODB_URI:", uri ? "SET" : "NOT SET");
  console.log("All env vars:", Object.keys(process.env).filter(key => key.includes('MONGO')));
  
  if (!uri) {
    console.warn("MONGODB_URI not set in .env — start MongoDB or set MONGODB_URI");
    return;
  }

  try {
    const dbName = process.env.MONGODB_DB || "test";
    await mongoose.connect(uri, {
      dbName,
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Keep trying for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      maxPoolSize: 10, // Maintain up to 10 socket connections
      minPoolSize: 5, // Maintain at least 5 socket connections
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    });
    console.log(`MongoDB connected (db: ${dbName})`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    console.error("→ Start MongoDB (e.g. run 'mongod' or start MongoDB service), then restart the server.");
  }
};

export default connectDB;
