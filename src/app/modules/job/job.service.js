const Job = require("./job.model");

const createNewJob = async (data) => {
  const result = await Job.create(data);
  return result;
};

const getAllJobsList = async () => {
  const result = await Job.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.jobService = {
  createNewJob,
  getAllJobsList,
};
