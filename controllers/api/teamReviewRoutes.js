const router = require("express").Router();
const { TeamReview } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newTReview = await TeamReview.create({
      user_id: req.session.user_id,
      team_id: req.body.team_id,
      review_score: req.body.review_score,
      content: req.body.content,
    });
    res.status(200).json(newTReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
