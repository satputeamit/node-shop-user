import { Router } from "express";

import { addNewUser } from "../controller";

const router = Router();

router.post("/adduser", addNewUser);

export default router;
