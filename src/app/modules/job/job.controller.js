const httpStatus = require("http-status");
const { jobService } = require("./job.service");

const createNewJob = async (req, res) => {
  try {
    const data = req.body;
    const result = await jobService.createNewJob(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Job Posted Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Job Posted Failed!!",
      error,
    });
  }
};

const getAllJobsList = async (req, res) => {
  try {
    const result = await jobService.getAllJobsList();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Job All Fetch Successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Job All Fetch Failed!!",
      error,
    });
  }
};
module.exports.jobController = {
  createNewJob,
  getAllJobsList,
};
