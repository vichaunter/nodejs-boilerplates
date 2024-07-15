import { Router } from "express";
import { getTasks } from "../controllers/getTasksController";
import { getTaskById } from "../controllers/getTaskByIdController";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.get("/:id", getTaskById);

export { taskRouter };
