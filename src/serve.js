import express from 'express';
import dotenv from 'dotenv';
import databaseConnect from './database/db.js';
import userRouter from './routes/userRouter.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
databaseConnect();

app.use('api/user', userRouter);

app.listen(PORT, () => console.log(`Servidor rodadndo na porta: ${PORT}`));