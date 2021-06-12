const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wall extends Model {}

Wall.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Wall",
  }
);

module.exports = Wall;
