import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}/e-commerce`;
    await mongoose.connect(uri);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
