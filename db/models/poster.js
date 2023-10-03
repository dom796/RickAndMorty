const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Poster extends Model {
    static associate({ User, Tag, Like }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsToMany(Tag, { through: 'PostTags', foreignKey: 'postId' });
      this.belongsToMany(Like, { through: 'PostLikes', foreignKey: 'postId' });
    }
  }
  Poster.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    profileImage: DataTypes.MEDIUMBLOB('long'),
    userid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Poster',
  });
  return Poster;
};
