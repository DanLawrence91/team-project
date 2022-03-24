const router = require("express").Router();
const { Team } = require("../../models");

// GET a team - linked to click event on
router.get("/", async (req, res) => {
  try {
    const teamData = await Team.findAll();

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
