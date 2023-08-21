import { addUser , login, validateUser} from "../../core/services";
import { Request, Response, NextFunction } from "express";

export async function addNewUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await addUser(req.body);
  res.json(data);
}

export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await login(req.body);
  res.json(data);
}


export async function validateCurrentUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await validateUser(req.params.id);
  res.json(data);
}

