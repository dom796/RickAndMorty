'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      posterId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Posters',
          },
          key: 'id',
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tags',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('PostTags');
  },
};
