const User = require("./User");
const Location = require("./Location");
const LocationReview = require("./LocationReview");
const Team = require("./Team");
const TeamReview = require("./TeamReview");

Location.hasMany(LocationReview, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

LocationReview.belongsTo(Location, {
  foreignKey: "location_id",
});

User.hasMany(LocationReview, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

LocationReview.belongsTo(User, {
  foreignKey: "user_id",
});

Location.hasMany(Team, {
  foreignKey: "location_id",
});

Team.belongsTo(Location, {
  foreignKey: "location_id",
});

Team.hasMany(User, {
  foreignKey: "team_id",
});

User.belongsTo(Team, {
  foreignKey: "team_id",
});

Team.hasMany(TeamReview, {
  foreignKey: "team_id",
  onDelete: "CASCADE",
});

TeamReview.belongsTo(Team, {
  foreignKey: "team_id",
});

User.hasMany(TeamReview, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

TeamReview.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Location, LocationReview, Team, TeamReview };
