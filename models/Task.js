const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
  {
    groupTitle: {
      type: String,

      default: 'To Do',
    },
    groupNumber: {
      type: Number,
      default: 1,
    },
    phaseId: {
      type: String,
      required: true,
    },
    taskItem: {
      description: {
        type: String,
        required: true,
        trim: true,
      },
      comment: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
