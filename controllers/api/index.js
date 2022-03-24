const router = require("express").Router();
const userRoutes = require("./userRoutes");
const locationRoutes = require("./locationRoutes");
const teamRoutes = require("./teamRoutes");
const locationReviewRoute = require("./locationReviewRoute");

router.use("/user", userRoutes);
router.use("/location", locationRoutes);
router.use("/team", teamRoutes);
router.use("/review", locationReviewRoute);

module.exports = router;
