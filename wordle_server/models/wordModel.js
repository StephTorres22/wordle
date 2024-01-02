import mongoose from "mongoose";

/* create a schema using mongoose built in Schema method */
const wordSchema = mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    dateUsed: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Word = mongoose.model("Word", wordSchema);
