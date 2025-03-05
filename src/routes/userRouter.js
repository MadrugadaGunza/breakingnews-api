import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
    res.status(200).send({ message: 'ok user' });
});

export default router;