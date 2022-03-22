const router = require("express").Router();
const { Team } = require("../../models");

// GET a team - linked to click event on
router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll();
    if (!teamData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
