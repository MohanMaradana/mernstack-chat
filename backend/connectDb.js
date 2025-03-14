import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectDb;

