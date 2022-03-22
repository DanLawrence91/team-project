const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: -90, max: 90 },
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: -180, max: 180 },
    },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: "location" }
);

module.exports = Location;
