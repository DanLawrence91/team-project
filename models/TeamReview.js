const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TeamReview extends Model {}

TeamReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    team_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "id",
        unique: false,
      },
    },
    review_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  { sequelize, freezeTableName: true, underscored: true, modelName: "teamReview" }
);

module.exports = TeamReview;
