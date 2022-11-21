/** @format */

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
      
    },
    slug: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // a blog post can have multiple comments, so it should be in a array.
    // all comments info should be kept in this array of this blog post.
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);
mongoose.models = {};

module.exports = mongoose.model("Blog", blogSchema);
