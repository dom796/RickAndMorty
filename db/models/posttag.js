'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostTag extends Model {
    static associate(models) {
    }
  }
  PostTag.init({
    posterId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PostTag',
  });
  return PostTag;
};
