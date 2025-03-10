import { createNewsService, findAllNewsService, findNewsByIdService, findNewsByUserService, likeNewsService } from "../services/newsService.js";

const createNews = async (req, res) => {
    try {
        const id = req.id;
        const { title, text, banner } = req.body;
        if (!title || !text || !banner) return res.status(400).send({ error: true, message: 'Preencha todos os campos e tente novamente' });
        await createNewsService({ title, text, banner, user: id });
        res.status(201).send({ message: 'Noticía criada com sucesso!' });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

const findAllNews = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);
        if (!limit) limit = 5;
        if (!offset) offset = 0;
        const news = await findAllNewsService(limit, offset);
        if (news.length === 0) return res.status(404).send({ error: true, message: 'Nenhuma noticía encontrada' });
        res.status(200).send({ data: news });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}

const findNewsByUser = async (req, res) => {
    try {
        const user = req.user;
        const news = await findNewsByUserService(user._id);
        if (news.length === 0) return res.status(200).send({ error: true, message: 'Nenhuma noticía relacionada a este usuário' });
        res.status(200).send({ news });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}
const likeNews = async (req, res) => {
    try {
        const user = req.user;
        const { id } = req.params;

        const likeNews = await likeNewsService(id, user._id);
        console.log(likeNews)

        res.status(200).send({ likeNews });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}


export { createNews, findAllNews, findNewsByUser, likeNews }