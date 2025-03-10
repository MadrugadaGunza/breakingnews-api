import jwt from 'jsonwebtoken';
import User from "../models/User.js";

const tokenGenerateService = (id) => jwt.sign({ id }, process.env.SECURITY_HASH, { expiresIn: '1h' });

export {
    tokenGenerateService
}