const User = require("./User");
const Location = require("./Location");
const LocationReview = require("./LocationReview");
const Team = require("./Team");
const TeamReview = require("./TeamReview");

// A user can have many posts
User.hasMany(LocationReview, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// These posts then belong to that user
LocationReview.belongsTo(User, {
  foreignKey: "user_id",
});

// A location can have many posts
Location.hasMany(LocationReview, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// These posts then belong to that location
LocationReview.belongsTo(Location, {
  foreignKey: "location_id",
});

// Location can have more than one team
Location.hasMany(Team, {
  foreignKey: "location_id",
});

// teams belong to the location they are located in
Team.belongsTo(Location, {
  foreignKey: "location_id",
});

// user picks favourite team, so teams can have many users
Team.hasMany(User, {
  foreignKey: "team_id",
});

//the user then belongs to this team
User.belongsTo(Team, {
  foreignKey: "team_id",
});

// A location can have many posts
Team.hasMany(TeamReview, {
  foreignKey: "team_id",
  onDelete: "CASCADE",
});

// These posts then belong to that location
TeamReview.belongsTo(Team, {
  foreignKey: "team_id",
});

module.exports = { User, Location, LocationReview, Team, TeamReview };
