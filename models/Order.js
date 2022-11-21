/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
// const stringRequired = {
//   type: String,
//   required: true,
// };
// const addressSchema = new Schema({
//   userID: {
//     type: String,
//   },
//   userEmail: {
//     type: String,
//     required: true,
//   },

//   address1: stringRequired,
//   address2: String,
//   city: stringRequired,
//   state: stringRequired,
//   zipcode: {
//     type: Number,
//     required: true,
//   },
//   country: stringRequired,
//   lastName: String,
//   firstName: stringRequired,
//   phone: {
//     type: Number,
//     required: true,
//   },
//   email: String,
// });
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
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "PENDING",
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
