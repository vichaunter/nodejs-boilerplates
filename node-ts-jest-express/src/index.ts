import express from "express";
import { taskRouter } from "./router/taskRouter";

const app = express();
const port = process.env.PORT || 3000;

function server() {
  // Use routers
  app.use("/task", taskRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

server();
