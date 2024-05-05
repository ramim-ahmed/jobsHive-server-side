const Job = require("./job.model");

const createNewJob = async (data) => {
  const result = await Job.create(data);
  return result;
};

module.exports.jobService = {
  createNewJob,
};
