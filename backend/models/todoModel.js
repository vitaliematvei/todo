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
