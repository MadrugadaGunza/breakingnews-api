import jwt from 'jsonwebtoken';
import { findByIdUserService } from '../services/userService.js';

export const authValidate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [schema, token] = authorization.split(' ');
        if (!schema || !token) return res.status(401).send({ error: true, message: 'Sem autorização' });
        jwt.verify(token, process.env.SECURITY_HASH, async (error, decoded) => {
            if (error) return res.status(401).send({ erorr: true, message: 'Usuário inválido ou sem autorização' });
            const id = decoded.id;
            const user = await findByIdUserService(id);
            if (!user) return res.status(400).send({ error: true, message: 'Token inválido ou espirado!' });
            req.id = user._id;
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}