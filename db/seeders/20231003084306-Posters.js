'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posters',
      [
        {
          title: 'Google запускает платный календарь',
          text: 'Google запускает платный календарь. Он будет стоить 10 крышек',
          profileImage: '',
          userid: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Google календарь',
          text: 'Google 10 крышек',
          profileImage: '',
          userid: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posters', null, {});
  },
};
