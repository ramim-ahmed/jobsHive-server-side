const { Schema, model } = require("mongoose");

const jobSchmea = new Schema(
  {
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "JobCategory",
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    maxPrice: {
      type: String,
      required: true,
    },
    minPrice: {
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

const Job = model("Job", jobSchmea);

module.exports = Job;
