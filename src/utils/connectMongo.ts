"use server";
import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://level2-admin:level2pass@cluster0.3qumfwu.mongodb.net/my-hisab?retryWrites=true&w=majority";
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};

async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error("😟! Please Define MONGO_URI in .env.local");
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
}

export default connectMongo;
