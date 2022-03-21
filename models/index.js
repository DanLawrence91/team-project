const User = require("./User");
const Location = require("./Location");
const Comment = require("./Comment");
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

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// these comments then belong to that user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// These comments belong to that post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
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

// A Location can have many comments
Location.hasMany(Comment, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// these comments then belong to that location
Comment.belongsTo(Location, {
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

module.exports = { User, Location, Comment, Post, Team };
