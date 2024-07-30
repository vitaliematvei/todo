import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
    // default: Date.now,
  },
  // reminderTime: {
  //   type: Date,
  //   required: false,
  //   default: Date.now,
  // },
});

export const ToDo = mongoose.model("ToDo", todoSchema);
