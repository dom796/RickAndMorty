'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({Poster}) {
      this.belongsToMany(Poster, { through: 'PostLikes', foreignKey: 'likeId' });
    }
  }
  Like.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
