const router = require("express").Router();
const { Location, Team, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll();
    const teams = teamData.map((team) => team.get({ plain: true }));

    const locationData = await Location.findAll();
    const locations = locationData.map((location) => location.get({ plain: true }));

    res.render("homepage", {
      teams,
      locations,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  // if (req.session.logged_in) {
    res.render('dashboard');
    return;
  //}
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
