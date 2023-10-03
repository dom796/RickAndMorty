'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          title: 'News',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Google',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Test',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
