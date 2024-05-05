const { Schema, model } = require("mongoose");

const jobCategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const JobCategory = model("JobCategory", jobCategorySchema);

module.exports = JobCategory;
