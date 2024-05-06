const Bid = require("./bid.model");

const createNewBid = async (data) => {
  const result = await Bid.create(data);
  return result;
};

const getAllBidsList = async (email) => {
  let result;
  if (email) {
    return (result = await Bid.find({ "buyer.email": email }).sort({
      createdAt: "desc",
    }));
  }
  result = await Bid.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.bidService = {
  createNewBid,
  getAllBidsList,
};
