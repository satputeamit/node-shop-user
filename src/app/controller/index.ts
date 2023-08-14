import { addUser } from "../../core/services";
import { Request, Response, NextFunction } from "express";

export async function addNewUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addUser(req.body);
  res.json(data);
}
