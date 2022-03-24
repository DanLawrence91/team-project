const router = require("express").Router();
const { LocationReview } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newReview = await LocationReview.create({
      user_id: req.session.user_id,
      location_id: req.body.id,
      review_score: req.body.review_score,
      content: req.body.content,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
