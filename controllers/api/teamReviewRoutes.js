const router = require("express").Router();
const { TeamReview } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newReview = await TeamReview.create({
      user_id: req.session.user_id,
      team_id: req.body.id,
      review_score: req.body.review_score,
      content: req.body.content,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
