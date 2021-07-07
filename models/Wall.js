const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Wall extends Model {}

Wall.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "Material WC-J3"
    },
    width: {
      type: DataTypes.DECIMAL(10, 4),
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
    },
    border: {
      type: DataTypes.BOOLEAN,
    },
    linearFeet: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: async (data) => {
        const numOfPanels = data.width / 50;
        const panelsRounded = Math.ceil(numOfPanels);

        let orderHeight;
        
        if(data.border) {
          orderHeight = parseFloat(data.height) + 6;
        } else {
          orderHeight = parseFloat(data.height);
        }

        const heightCalculation = orderHeight * panelsRounded;
        const dividedHeight = heightCalculation / 12
        data.linearFeet = Math.ceil(dividedHeight);
      }
  },
    sequelize,
    modelName: "Wall",
  }
);

module.exports = Wall;
