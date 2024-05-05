const httpStatus = require("http-status");
const { jobCategoryService } = require("./jobCategory.service");

const createJobCategory = async (req, res) => {
  try {
    const data = req.body;
    const result = await jobCategoryService.createJobCategory(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Job category created successfully!!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Job category created failed !!!",
      error,
    });
  }
};

const getAllJobCatgory = async (req, res) => {
  try {
    const result = await jobCategoryService.getAllJobCategory();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Job Category All Fetch successfully!!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Job Category All Fetch failed !!!",
      error,
    });
  }
};

module.exports.jobCategoryController = {
  createJobCategory,
  getAllJobCatgory,
};
