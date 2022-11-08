const mongoose = require("mongoose");
// definfing the schema
const taskSchema = new mongoose.Schema(

  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: String,
  },
  {
    timestamps: true,
  }
);

// exporting the model
module.exports = mongoose.model("Task", taskSchema);
