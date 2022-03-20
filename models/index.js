const User = require("./User");
const Location = require("./Location");
const Comment = require("./Comment");
const Post = require("./Post");

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
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// These posts then belong to that location
Post.belongsTo(Location, {
  foreignKey: "user_id",
});

// A Location can have many comments
Location.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// these comments then belong to that location
Comment.belongsTo(Location, {
  foreignKey: "user_id",
});

module.exports = { User, Location, Comment, Post };
