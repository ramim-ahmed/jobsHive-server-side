const Bid = require("./bid.model");

const createNewBid = async (data) => {
  const result = await Bid.create(data);
  return result;
};

module.exports.bidService = {
  createNewBid,
};
