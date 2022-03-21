const User = require("./User");
const Location = require("./Location");
const Post = require("./Post");
const Team = require("./Team");

// A user can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// These posts then belong to that user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// A location can have many posts
Location.hasMany(Post, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// These posts then belong to that location
Post.belongsTo(Location, {
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

module.exports = { User, Location, Post, Team };
