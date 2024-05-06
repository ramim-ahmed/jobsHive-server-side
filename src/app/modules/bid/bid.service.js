const Bid = require("./bid.model");

const createNewBid = async (data) => {
  const result = await Bid.create(data);
  return result;
};

const getAllBidsList = async () => {
  const result = await Bid.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.bidService = {
  createNewBid,
  getAllBidsList,
};
