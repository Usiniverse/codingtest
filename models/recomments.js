'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recomments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recomments.belongsTo(models.comments, { foreignKey: "commentId", sourceKey: "recommentId", onDelete: "CASCADE" });
      // recomments.belongsTo(models.posts, { foreignKey: "postId", sourceKey: "recommentId", onDelete: "CASCADE" });
    }
  }
  recomments.init({
    recommentId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    recommentContent: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'recomments',
  });
  return recomments;
};