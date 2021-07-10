const mongoose = require('mongoose')
const moment = require('moment')

const phaseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['ongoing', 'revised', 'done', 'queued'],
      default: 'queued',
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    submissionDate: {
      type: Date,
      default: Date.now,
    },
    projectId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Phase = mongoose.model('Phase', phaseSchema)

module.exports = Phase
