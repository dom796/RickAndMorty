'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Poster }) {
      this.belongsToMany(Poster, { through: 'PostTags', foreignKey: 'tagId' });
    }
  }
  Tag.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
