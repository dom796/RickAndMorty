'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostLike extends Model {
    static associate(models) {
    }
  }
  PostLike.init({
    posterId: DataTypes.INTEGER,
    likeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PostLike',
  });
  return PostLike;
};
