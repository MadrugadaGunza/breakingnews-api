import { Router } from "express";
import { findUser, login } from "../controllers/authController.js";
import { authValidate } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/login', login);
router.get('/user', authValidate,findUser);

export default router;