const express = require("express");
const { bidController } = require("./bid.controller");
const router = express.Router();

router.post("/create-new", bidController.createNewBid);

module.exports.bidRoutes = router;
