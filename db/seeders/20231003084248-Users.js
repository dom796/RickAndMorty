'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Jhon',
          email: 'example1@mail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jhon2',
          email: 'example12@mail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
