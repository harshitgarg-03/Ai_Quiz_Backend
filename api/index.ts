import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// IMPORTANT: prevent multiple DB connections
let isConnected = false;

const connect = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

// Vercel handler
export default async function handler(req: any, res: any) {
  await connect();
  return app(req, res);
}