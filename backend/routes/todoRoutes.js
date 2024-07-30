import express from "express";
import { ToDo } from "../models/todoModel.js";
import cors from "cors";

const router = express.Router();

router.use(cors());
// Route for Save a new ToDo
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.content ||
      !request.body.details ||
      !request.body.done ||
      !request.body.createdAt
    ) {
      return response.status(400).send({
        message: "Send all required fileds: content, done, createdAt",
      });
    }

    const newToDo = {
      content: request.body.content,
      details: request.body.details,
      done: request.body.done,
      createdAt: request.body.createdAt,
    };

    const todo = await ToDo.create(newToDo);
    return response.status(201).send(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Todos from DB
router.get("/", async (request, response) => {
  try {
    const todo = await ToDo.find({});

    return response.status(201).json({
      count: todo.length,
      data: todo,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get one by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const todo = await ToDo.findById(id);

    return response.status(201).json(todo);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route update
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.content ||
      !request.body.done ||
      !request.body.createdAt
    ) {
      return response.status(400).send({
        message: "Send all required fileds: content, done, createdAt",
      });
    }

    const { id } = request.params;

    const todo = await ToDo.findByIdAndUpdate(id, request.body);

    if (!todo) {
      response.status(404).json({ message: "Todo not found" });
    }

    return todo.status(200).send({ message: "Todo updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route Delete one
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const todo = await ToDo.findByIdAndDelete(id);

    if (!todo) response.status(404).json({ message: "Todo not found" });

    return response.status(200).send({ message: "Todo deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
