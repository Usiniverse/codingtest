'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users.hasMany(models.posts, { foreignKey: "postId", sourceKey: "userId", onDelete: "CASCADE" });
      // users.hasMany(models.comments, { foreignKey: "commentId", sourceKey: "userId", onDelete: "CASCADE" });
      // users.hasMany(models.recomments, { foreignKey: "recommentId", sourceKey: "userId", onDelete: "CASCADE" });
    }
  }
  users.init({
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};