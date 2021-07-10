const express = require('express')
const homeRouter = express.Router()

homeRouter.get('/taks', (req, res) => {
  res.send('Task Data')
})

homeRouter.get('/project-details', (req, res) => {
  res.send('project-details')
})

homeRouter.get('/taks-details', (req, res) => {
  res.send('Task Details Data')
})

homeRouter.get('/task-group', (req, res) => {
  res.send('Task group Data')
})
module.exports = homeRouter
