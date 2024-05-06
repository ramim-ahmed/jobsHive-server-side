const express = require("express");
const {
  jobCategoryRoutes,
} = require("../modules/jobCategory/jobCategory.route");
const { jobRoutes } = require("../modules/job/job.route");
const { bidRoutes } = require("../modules/bid/bid.route");
const { tokenRoutes } = require("../modules/token/token.route");

const router = express.Router();
const moduleRoutes = [
  {
    path: "/job-category",
    route: jobCategoryRoutes,
  },
  {
    path: "/jobs",
    route: jobRoutes,
  },
  {
    path: "/bids",
    route: bidRoutes,
  },
  {
    path: "/token",
    route: tokenRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
