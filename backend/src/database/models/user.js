const {DataTypes} = require('sequelize');
// Nome, E-mail, Telefone, Mensagem, Arquivo Anexo
const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  file: {
    type: DataTypes.STRING,
    allowNull: true,
    // defaultValue: '',
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define('users', Attributes, {
    // underscored: true,
    tableName: 'users',
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    // freezeTableName: true,
    // timestamps: false
  });

  return User;
};