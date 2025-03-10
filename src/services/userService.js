import User from './../models/User.js';

const findOneUserService = (email) => User.findOne({ email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByIdUserService = (id) => User.findById(id);

export {
    findOneUserService,
    createUserService,
    findAllUserService,
    findByIdUserService
}
