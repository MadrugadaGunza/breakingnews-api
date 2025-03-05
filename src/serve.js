import express from 'express';
import dotenv from 'dotenv';
import databaseConnect from './database/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
databaseConnect();

app.listen(PORT, () => console.log(`Servidor rodadndo na porta: ${PORT}`));