const { Schema, model } = require("mongoose");

const bidSchema = new Schema(
  {
    buyer: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },

    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    bidPrice: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Bid = model("Bid", bidSchema);

module.exports = Bid;
