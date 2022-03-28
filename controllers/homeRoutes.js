const router = require("express").Router();
const { Location, Team } = require("../models");

router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll();
    const teams = teamData.map((team) => team.get({ plain: true }));

    const locationData = await Location.findAll();
    const locations = locationData.map((location) => location.get({ plain: true }));

    res.render("homepage", {
      teams,
      locations,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//have commented out the login for now because other wise its looking for a logged in user and not getting the route

router.get("/dashboard", (req, res) => {
  if (req.session.logged_in) {
    res.render("dashboard");
    return;
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // needs to be login handlebars name here
  res.render("login");
});

module.exports = router;
