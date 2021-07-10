const mongoose = require('mongoose')

const taskGroupSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    phaseId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const TaskGroup = mongoose.model('TaskGroup', taskGroupSchema)

module.exports = TaskGroup
