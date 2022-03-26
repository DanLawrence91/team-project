const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Team, TeamReview } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const teamData = await TeamReview.findAll();
//     const teams = teamData.map((team) => team.get({ plain: true }));

//     res.status(200).json(teams);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// displays team reviews for that team
router.get("/:id", withAuth, async (req, res) => {
  try {
    const teamRevData = await Team.findByPk(req.params.id, {
      include: [
        {
          model: TeamReview,
          attributes: ["review_score", "content"],
          include: {
            model: User,
            attributes: { exclude: ["password"], include: ["first_name", "last_name"] },
          },
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
