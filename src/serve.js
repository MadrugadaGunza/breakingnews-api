import express from 'express';
import dotenv from 'dotenv';
import databaseConnect from './database/db.js';
// routes
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import newsRouter from './routes/newsRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
databaseConnect();

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/news', newsRouter);

app.listen(PORT, () => console.log(`Servidor rodadndo na porta: ${PORT}`));