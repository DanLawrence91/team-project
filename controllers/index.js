const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const locationRoutes = require("./getLocationRoutes");
const teamRoutes = require("./getTeamRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/location", locationRoutes);
router.use("/team", teamRoutes);

module.exports = router;
