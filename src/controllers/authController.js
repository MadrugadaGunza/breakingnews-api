import bcrypt from 'bcrypt';
import { findOneUserService } from "../services/userService.js";
import { tokenGenerateService } from '../services/authService.js';

const findUser = async (req, res) => {
    try {
        const user = req.user;
        res.send({
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send({ error: true, message: 'Preencha todos os campos' });
        const user = await findOneUserService(email).select('+password');
        if (!user) return res.status(404).send({ error: true, message: 'Email ou Senha errada' });
        const passwordExists = await bcrypt.compare(password, user.password);
        if (!passwordExists) return res.status(404).send({ error: true, message: 'Email ou Senha errada' });
        const token = tokenGenerateService(user._id);
        if (!token) return res.status(404).send({ error: true, message: 'Erro ao gerar token' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

export { login, findUser }