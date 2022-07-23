const {created, success} = require('../utils/dictionary/statusCode');
const {users: userModel} = require('../database/models');

const create = async (req, res, next) => {
  try {
    const info = {
      file: req.file.path,
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      mensagem: req.body.mensagem,
    }
    const newUser = await userModel.create(info);
    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATEUSER -> ${error.message}`);
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.findAll();

    return res.status(success).json(users);
  } catch (error) {
    console.log(`GET GETALLUSERS -> ${error.message}`);
    next(error);
  }
};

module.exports = {create, getAllUsers};
