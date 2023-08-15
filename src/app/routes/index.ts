import { Router } from "express";

import { addNewUser, loginUser } from "../controller";

const router = Router();

router.post("/adduser", addNewUser);
router.post("/login", loginUser);

export default router;
