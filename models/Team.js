const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false,
      },
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false,

      validate: { min: -90, max: 90 },
    },
    longitude: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false,
      validate: { min: -180, max: 180 },
    },
  },

  { sequelize, freezeTableName: true, underscored: true, modelName: "team" }
);

module.exports = Team;
