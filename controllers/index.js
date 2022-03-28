const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const locationRoutes = require("./getLocationRoutes");
const teamRoutes = require("./getTeamRoutes");
const dashboard = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/location", locationRoutes);
router.use("/team", teamRoutes);
router.use("/dashboard", dashboard );

module.exports = router;
