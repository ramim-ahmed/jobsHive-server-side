const express = require("express");
const { jobController } = require("./job.controller");
const router = express.Router();

router.get("/", jobController.getAllJobsList);
router.post("/create-new", jobController.createNewJob);

module.exports.jobRoutes = router;
