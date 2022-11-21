/** @format */

import mongoose from "mongoose";

const connectMongo = () => {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(`${process.env.MONGODB_URI}`);
  }
  mongoose.connect(`${process.env.MONGODB_URI}`, {}, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export default connectMongo;
