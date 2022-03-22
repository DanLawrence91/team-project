const router = require("express").Router();
const userRoutes = require("./userRoutes");
const locationRoutes = require("./locationRoutes");
const teamRoutes = require("./teamRoutes");

router.use("/user", userRoutes);
router.use("/location", locationRoutes);
router.use("/team", teamRoutes);

module.exports = router;
