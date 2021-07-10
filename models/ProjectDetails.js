const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
