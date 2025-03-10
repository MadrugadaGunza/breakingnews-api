import { Router } from "express";
import { createNews, findAllNews, findNewsByUser, likeNews } from "../controllers/newsController.js";
import { authValidate } from './../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authValidate, createNews);
router.get('/', findAllNews);
router.get('/by-user', authValidate, findNewsByUser);
router.patch('/like/:id', authValidate, likeNews);

export default router;