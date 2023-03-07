/** @format */

import mongoose from "mongoose";
let uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  // throw new Error(
  //   "Please define the MONGODB_URI environment variable inside .env.local"
  // );
}
const connectDb = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  if (!uri) return;
  await mongoose.connect(uri);
  return handler(req, res);
};
export default connectDb;
