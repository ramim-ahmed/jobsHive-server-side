const express = require("express");
const {
  jobCategoryRoutes,
} = require("../modules/jobCategory/jobCategory.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/job-category",
    route: jobCategoryRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
