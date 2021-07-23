var Task = require('../models/Task')

// create and save new task
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty!' })
    return
  }
  const task = new Task({
    ...req.body,
  })
  task
    .save(task)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating a create operation',
      })
    })
}

// retrieve and return all users/ retrive and return a single task
exports.find = (req, res) => {
  console.log(req.query.status)
  if (req.query.id) {
    const id = req.query.id

    Task.find({ phaseId: id })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: 'Not found user with id ' + id })
        } else {
          res.send(data)
        }
      })
      .catch((err) => {
        res.status(500).send({ message: 'Erro retrieving user with id ' + id })
      })
  } else {
    Task.find()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Error Occurred while retriving user information',
        })
      })
  }
}

// Update a new idetified task by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' })
  }

  const id = req.params.id
  if (id) {
    Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot Update user with ${id}. Maybe user not found!`,
          })
        } else {
          res.send(data)
        }
      })
      .catch((err) => {
        res.status(500).send({ message: 'Error Update user information' })
      })
  }
}

// Delete a user with specified task id in the request
exports.delete = (req, res) => {
  const phaseId = req.params.id

  Task.deleteMany({ phaseId })
    .then((data) => {
      if (!data) {
        res.status(404)
        res.send({
          message: `Cannot Delete with id ${phaseId}. Maybe id is wrong`,
        })
      } else {
        res.send({
          message: `successfully deleted!`
        })
        console.log('Delete Done');
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      })
    })
}
// // delete many
// exports.delete = async (req, res) => {
//   console.log('*****************************')
//   const phaseId = req.params.id

//   if (!mongoose.Types.ObjectId.isValid(phaseId))
//     return await res.status(404).send(`No post with id: ${phaseId}`)
//   console.log('fdgsgdsfgsdfg')
//   await Task.deleteMany({ phaseId })

//   await res.json({ message: 'task deleted successfully.' })
//   console.log('*****************************')
// }
