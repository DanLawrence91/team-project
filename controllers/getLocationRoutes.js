const router = require("express").Router();
const withAuth = require("../utils/auth");
const { LocationReview, User, Location } = require("../models");

// displays location reviews for that location
router.get("/:id", withAuth, async (req, res) => {
  try {
    const locRevData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"], include: ["first_name", "last_name"] },
        },
        {
          model: LocationReview,
          attributes: ["review_score", "content"],
        },
      ],
    });

    const locReviews = locRevData.get({ plain: true });
    res.render("locationReviews", {
      ...locReviews,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
