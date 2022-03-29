// Dashboard Routes to get and edit posts
// const router = require("express").Router();
// const { User, LocationReview, TeamReview } = require("../models");
// const withAuth = require("../utils/auth");

// router.get("/", withAuth, async (req, res) => {
// Trying to hide the user id from url
  // try {
    // const locationReviewData = await LocationReview.findAll(
    //   {
    //   include: [{
    //     association: LocationReview.belongsTo(User, {
    //       foreignKey: "user_id",
    //     }),
    //     attributes: ["review_score", "content", "location_id"],
    //     where: {
    //       user_Id: req.session.user_Id
    //     }
    //   }]
    // }
    // );

    // const locationRevData = await User.findByPk(req.session.user_Id, {
    //   include: [
    //     {
    //       model: LocationReview,
    //       attributes: ["review_score", "content", "location_id"],
    //       include: {
    //         model: User,
    //         attributes: { exclude: ["password"]},
    //       },
    //     },
    //   ],
    // });
    
    // const locationReviewArray = locationRevData.get({ plain: true });

    // const locationData = await Location.findAll();
    // const locations = locationData.map((location) => location.get({ plain: true }));
    // const userData = await LocationReview.findAll({
    //   include: { 
    //       model: LocationReview,
    //       attributes: ["review_score", "content", "location_id"],
    //       where: {
    //         user_Id: req.session.user_Id,
    //       }
    //   }
    // });

    // const locationReviews = locationReviewArray.get({ plain: true });

//     res.render("dashboard", {
//       ...locationReviewArray,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

const router = require("express").Router();
const { LocationReview, TeamReview, Team, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const teamRevData = await TeamReview.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Team,
          attributes: ['team_name'],
        },
      ]
    });
    const teamRevs = teamRevData.map((team) => team.get({ plain: true }));

    const locationRevData = await LocationReview.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const locationRevs = locationRevData.map((location) => location.get({ plain: true }));

    res.render("dashboard", {
      teamRevs,
      locationRevs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
