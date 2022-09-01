'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.users, { foreignKey: "userId", sourceKey: "commentId", onDelete: "CASCADE" });
      comments.belongsTo(models.posts, { foreignKey: "postId", sourceKey: "commentId", onDelete: "CASCADE" });
    }
  }
  comments.init({
    commentId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    commentContent: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};