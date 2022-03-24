const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Team, TeamReview } = require("../models");

// displays team reviews for that team
router.get("/team/:id", withAuth, async (req, res) => {
  try {
    const teamRevData = await Team.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"], include: ["first_name", "last_name"] },
        },
        {
          model: TeamReview,
          attributes: ["review_score", "content"],
        },
      ],
    });

    const teamReviews = teamRevData.get({ plain: true });
    res.render("teamReviews", {
      ...teamReviews,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
