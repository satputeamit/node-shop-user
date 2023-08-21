import { Router } from "express";

import { addNewUser, loginUser, validateCurrentUser } from "../controller";

const router = Router();

router.post("/adduser", addNewUser);
router.post("/login", loginUser);
router.get("/validate/:id", validateCurrentUser);

export default router;
