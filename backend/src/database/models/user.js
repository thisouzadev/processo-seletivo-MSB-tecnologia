const {DataTypes} = require('sequelize');
// Nome, E-mail, Telefone, Mensagem, Arquivo Anexo
const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // upload: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   defaultValue: '',
  // },
};

module.exports = (sequelize) => {
  const User = sequelize.define('users', Attributes, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  return User;
};