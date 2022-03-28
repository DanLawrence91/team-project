// Dashboard Routes to get and edit posts

const router = require("express").Router();
const { User, LocationReview } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: LocationReview }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//router.get("/", withAuth, async (req, res) => {
  //try {
    //const locationReview = await LocationReview.findAll({
      
   // });
   // const locationReviews = locationReview.map((review) => review.get({plain: true}));
    // alert(locationReviews);
   // res.render ('dashboard', {
   //   ...locationReviews,
   // logged_in: req.session.logged_in
 // });

 // } catch(err) {
 //   res.status(500),json(err);
 // }
//});

//router.get("/", withAuth, async (req, res) => {
  //try {
   // const teamReview = await TeamReview.findAll({
      
    //});
    //const teamReviews = teamReview.map((review) => review.get({plain: true}));
    // alert(teamReviews);
   // res.render ('dashboard', {
   //   teamReviews,
   // logged_in: req.session.logged_in
 // });

  //} catch(err) {
  //  res.status(500),json(err);
 // }
// });

  // LocationReview.findAll({
  //   where: {
  //     userId: req.session.userId,
  //   },
  // })
  //   .then((dbPostData) => {
  //     const posts = dbPostData.map((post) => post.get({ plain: true }));

  //     res.render("dashboard", {
  //       layout: "dashboard",
  //       posts,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.redirect("login");
  //   });
//});

// router.get("/", withAuth, (req, res) => {
//   TeamReview.findAll({
//     where: {
//       userId: req.session.userId,
//     },
//   })
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));

//       res.render("dashboard", {
//         layout: "dashboard",
//         posts,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.redirect("login");
//     });
// });




//router.get("/new", withAuth, (req, res) => {
 // res.render("new-post", {
  //  layout: "dashboard",
 // });
//});

//router.get("/edit/:id", withAuth, (req, res) => {
 // LocationReview.findByPk(req.params.id)
  //  .then((dbPostData) => {
  //    if (dbPostData) {
  //      const post = dbPostData.get({ plain: true });

    //    res.render("edit-post", {
   //       layout: "dashboard",
   //       post,
  //      });
   //   } else {
   //     res.status(404).end();
   //   }
   // })
   // .catch((err) => {
   //   res.status(500).json(err);
   // });
// });

module.exports = router;
