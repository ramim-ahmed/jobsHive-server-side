const JobCategory = require("./jobCategory.model");

const createJobCategory = async (data) => {
  const result = await JobCategory.create(data);
  return result;
};

const getAllJobCategory = async () => {
  const result = await JobCategory.find({});
  return result;
};

module.exports.jobCategoryService = {
  createJobCategory,
  getAllJobCategory,
};
