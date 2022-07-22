module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
        [{
          id: 1,
          nome: 'Lewis Hamilton',
          email: '10/10/1991',
          telefone: '979447878',
          mensagem: 'me liga',
          // upload: '',
        },
        ], {timestamps: false});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
