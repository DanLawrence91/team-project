const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const locationRoutes = require("./getLocationRoutes");
const teamRoutes = require("./getTeamRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/location", locationRoutes);
router.use("/team", teamRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
