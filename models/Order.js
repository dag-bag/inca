/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema(
  {
    userID: {
      type: String,
    },
    userEmail: {
      type: String,
      required: true,
    },
    orderID: {
      type: String,
      required: true,
    },
    products: Object,

    address: {},
    subTotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "PENDING",
      required: true,
    },
    deliveryCost: {
      type: Number,
      required: true,
    },
    paymentInfo: {
      type: Object,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
module.exports = mongoose.model("Order", orderSchema);
