const Joi = require('joi');

const {users} = require('../database/models');

const errorConstructor = require('../utils/functions/errorhandling');
const {badRequest} = require('../utils/dictionary/statusCode');

const schemaCreateUser = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  telefone: Joi.string().required(),
  mensagem: Joi.string().required(),
  // upload: Joi.string().required(),
});

const createUserService = async (nome, email, telefone, mensagem) => {
  const {error} = schemaCreateUser.validate({nome, email, telefone, mensagem});
  if (error) throw errorConstructor(badRequest, error.message);
  const createUserResponse = await users.create({
    nome,
    email,
    telefone,
    mensagem
    // upload: `localhost:3000/src/uploads/${upload}`,
  });
  return createUserResponse;
};

module.exports = {
  createUserService,
};