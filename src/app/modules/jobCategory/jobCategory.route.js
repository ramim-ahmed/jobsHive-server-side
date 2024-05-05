const express = require("express");
const { jobCategoryController } = require("./jobCategory.controller");
const router = express.Router();

router.post("/create-new", jobCategoryController.createJobCategory);

module.exports.jobCategoryRoutes = router;
