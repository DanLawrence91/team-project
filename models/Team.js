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
  },

  { sequelize, freezeTableName: true, underscored: true, modelName: "team" }
);

module.exports = Team;
