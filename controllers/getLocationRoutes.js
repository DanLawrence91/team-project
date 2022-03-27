const router = require("express").Router();
const withAuth = require("../utils/auth");
const { LocationReview, User, Location } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const teamData = await Location.findAll();
//     const teams = teamData.map((team) => team.get({ plain: true }));

//     res.status(200).json(teams);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// displays location reviews for that location
router.get("/:id", withAuth, async (req, res) => {
  try {
    const locRevData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: LocationReview,
          attributes: ["review_score", "content"],
          include: {
            model: User,
            attributes: { exclude: ["password"], include: ["first_name", "last_name"] },
          },
        },
      ],
    });

    const locationReviews = locRevData.get({ plain: true });
    res.render("locationReviews", {
      ...locationReviews,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("*", async (req, res) => {
  try {
    res.render("locationReviews");
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
