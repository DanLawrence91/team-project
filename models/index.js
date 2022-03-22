const User = require("./User");
const Location = require("./Location");
const LocationReview = require("./LocationReview");
const Team = require("./Team");

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
  onDelete: "CASCADE",
});

// teams belong to the location they are located in
Team.belongsTo(Location, {
  foreignKey: "location_id",
});

Team.hasMany(User, {
  foreignKey: "team_id",
});

User.belongsTo(Team, {
  foreignKey: "team_id",
});

module.exports = { User, Location, LocationReview, Team };
