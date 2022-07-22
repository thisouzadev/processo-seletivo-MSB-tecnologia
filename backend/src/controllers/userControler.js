const {
  createUserService
} = require('../services/userService');
const {created, success} = require('../utils/dictionary/statusCode');

const {users: userModel} = require('../database/models');

const create = async (req, res, next) => {
  try {
    const {nome, email, telefone, mensagem} = req.body;
    // const {upload} = req.file;
    const newUser = await createUserService(nome, email, telefone, mensagem);
    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATEUSER -> ${error.message}`);
    next(error);
  }
};

// const uploadImage = async (req, res, next) => {
//   try {
//     const {id} = req.params;
//     const {image} = req.file;
//     const getImage = await uploadImageMulter(id, image);
//     return res.status(success).json(getImage);
//   } catch (error) {
//     console.log(`PUT UPLOADIMAGE -> ${error.message}`);
//     next(error);
//   }
// };

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
