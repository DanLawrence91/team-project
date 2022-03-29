const router = require("express").Router();
const { LocationReview, TeamReview, Team, Location, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const teamRevData = await TeamReview.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Team,
          required: true
        },
      ]
    });
    const teamRevs = teamRevData.map((team) => team.get({ plain: true }));
    // console.log(teamRevs);

    const locationRevData = await LocationReview.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Location,
          required: true
        },
      ]
    });
    const locationRevs = locationRevData.map((location) => location.get({ plain: true }));

    res.render("dashboard", {
      teamRevs,
      locationRevs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
