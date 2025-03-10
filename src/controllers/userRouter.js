import { createUserService, findAllUserService, findOneUserService } from "../services/userService.js";

const findAllUser = async (req, res) => {
    try {
        const users = await findAllUserService();
        if (!users) return res.status(400).send({ error: true, message: 'Nenhum usuário encontrado!' });
        res.status(200).send({ data: users });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).send({ error: true, message: 'Preencha todos os campos' });
        const userExists = await findOneUserService(email);
        if (userExists) return res.status(400).send({ error: true, message: 'Já existe um usuário com este email!' });
        const user = await createUserService(req.body);
        res.status(201).send({ messgae: `Usuário criado ${user.name} com sucesso` });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

export { createUser, findAllUser };