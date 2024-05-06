const httpStatus = require("http-status");
const { bidService } = require("./bid.service");

const createNewBid = async (req, res) => {
  try {
    const data = req.body;
    const result = await bidService.createNewBid(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Bid Placed successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Bid Placed Failed!!",
      error,
    });
  }
};

const getAllBidsList = async (req, res) => {
  try {
    const { email } = req.query;
    const result = await bidService.getAllBidsList(email);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Bid Placed Fetch All successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Bid Placed Fetch All Failed!!",
      error,
    });
  }
};

module.exports.bidController = {
  createNewBid,
  getAllBidsList,
};
