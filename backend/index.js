import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import router from "./routes/todoRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/todos", router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
