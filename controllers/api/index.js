const router = require("express").Router();
const userRoutes = require("./userRoutes");
const locationReviewRoutes = require("./locationReviewRoutes");
const teamReviewRoutes = require("./teamReviewRoutes");

router.use("/user", userRoutes);
router.use("/location-review", locationReviewRoutes);
router.use("/team-review", teamReviewRoutes);

module.exports = router;
