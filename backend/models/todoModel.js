import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    default: "dewfault mVI",
  },
  details: {
    type: String,
    required: true,
    default: "dewfault mVI",
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reminderTime: {
    type: Date,
    default: Date.now,
  },
});

export const ToDo = mongoose.model("ToDo", todoSchema);
