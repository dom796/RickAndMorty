'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'PostLikes',
      [
        {
          posterId: 1,
          likeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          posterId: 2,
          likeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostLikes', null, {});
  },
};
