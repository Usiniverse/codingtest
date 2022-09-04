'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.hasMany(models.comments, { foreignKey: "commentId", sourceKey: "postId", onDelete: "CASCADE" })
      // posts.hasMany(models.recomments, { foreignKey: "recommentId", sourceKey: "postId", onDelete: "CASCADE" })
      // posts.belongsTo(models.users, { foreignKey: "userName", sourceKey: "postId", onDelete: "CASCADE" })
    }
  }
  posts.init({
    postId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    postContent: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};