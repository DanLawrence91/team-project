const sequelize = require("../config/connection");
const { Location, Team, User } = require("../models");

const teamData = require("./teamData.json");
const locationData = require("./locationData.json");
const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Team.bulkCreate(teamData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
