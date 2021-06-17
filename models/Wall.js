const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Wall extends Model {}

// UserId foreign key is commented out temporarily while login is being created
// Otherwise form submission will fail due to a lack of a User ID

Wall.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "User",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    modelName: "Wall",
  }
);

module.exports = Wall;
