const router = require("express").Router();
const withAuth = require("../utils/auth");
const { LocationReview, User, Location, Team, TeamReview } = require("../models");

// displays location reviews for that location
router.get("/location-review/:id", withAuth, async (req, res) => {
  try {
    const locRevData = await LocationReview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
        },
        {
          model: Location,
          attributes: ["location_name"],
        },
      ],
    });

    const locReview = locRevData.get({ plain: true });
    res.render("locationReview", {
      ...locReview,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// displays team reviews for that team
router.get("/team-review/:id", withAuth, async (req, res) => {
  try {
    const teamRevData = await TeamReview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name"],
        },
        {
          model: Team,
          attributes: ["team_name"],
        },
      ],
    });

    const teamReview = teamRevData.get({ plain: true });
    res.render("teamReview", {
      ...teamReview,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
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
