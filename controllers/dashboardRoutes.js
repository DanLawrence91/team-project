const router = require("express").Router();
const { LocationReview, TeamReview, Team, Location, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    const teamRevData = await TeamReview.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Team,
          attributes: ["team_name"],
        },
      ],
    });
    const teamRevs = teamRevData.map((team) => team.get({ plain: true }));

    const locationRevData = await LocationReview.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Location,
          attributes: ["location_name"],
        },
      ],
    });
    const locationRevs = locationRevData.map((location) => location.get({ plain: true }));

    res.render("dashboard", {
      user,
      teamRevs,
      locationRevs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
