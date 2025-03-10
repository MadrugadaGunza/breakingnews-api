import News from './../models/News.js'

const createNewsService = (body) => News.create(body);

const findAllNewsService = (limit, offset) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate('user');

const findNewsByUserService = (id) => News.find({ user: id }).sort({ _id: -1 }).populate('user');

const findNewsByIdService = (id) => News.findById(id);

const likeNewsService = (idNews, userId) => News.findByIdAndUpdate(
    { _id: idNews, "like.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
);

export {
    createNewsService,
    findAllNewsService,
    findNewsByUserService,
    findNewsByIdService,
    likeNewsService
}
