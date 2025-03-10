import { Router } from "express";
import { createUser, findAllUser } from "../controllers/userRouter.js";

const router = Router();

router.post('/', createUser);
router.get('/', findAllUser);

export default router;