const express = require("express");
const { bidController } = require("./bid.controller");
const verifyToken = require("../../middlewares/verifyToken");
const router = express.Router();

router.get("/", verifyToken, bidController.getAllBidsList);
router.post("/create-new", bidController.createNewBid);

module.exports.bidRoutes = router;
