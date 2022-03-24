const router = require("express").Router();

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // needs to be login handlebars name here
  res.render("login");
});

module.exports = router;
