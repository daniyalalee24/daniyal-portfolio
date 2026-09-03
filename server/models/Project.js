const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    order: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    liveUrl: { type: String },
    githubUrl: { type: String },
    highlights: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Project", projectSchema);
