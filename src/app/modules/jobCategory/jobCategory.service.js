const JobCategory = require("./jobCategory.model");

const createJobCategory = async (data) => {
  const result = await JobCategory.create(data);
  return result;
};

module.exports.jobCategoryService = {
  createJobCategory,
};
