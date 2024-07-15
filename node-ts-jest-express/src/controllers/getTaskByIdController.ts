import { Request, Response } from "express";

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Details of task with ID: ${id}`);
};
