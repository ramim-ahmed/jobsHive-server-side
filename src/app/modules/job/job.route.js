const express = require("express");
const { jobController } = require("./job.controller");
const router = express.Router();

router.post("/create-new", jobController.createNewJob);

module.exports.jobRoutes = router;
