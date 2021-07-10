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
  if (req.query.id) {
    const id = req.query.id

    Task.find({ groupId: id })
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

// Delete a user with specified task id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Task.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
      } else {
        res.send({
          message: 'User was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      })
    })
}

// uid
// 60e8da2f3a9a713b78d15bda
// pid
// 60e8db583a9a713b78d15bdc

// phid
// 60e8dfe1ded002323cd53c6a gid(60e8e57718b1343e946c2060,60e8e5cd18b1343e946c2062,60e8e5ef18b1343e946c2064) tid(60e8e72689751533b0ad4ab0,60e8e74b89751533b0ad4ab2) tid(60e8e78089751533b0ad4ab4)tid(60e8e7a389751533b0ad4ab6 60e8e7b389751533b0ad4ab8)
// 60e8e0741d0c4017ec81bfa9 gid(60e8e62418b1343e946c2066,60e8e64218b1343e946c2068, 60e8e65218b1343e946c206a)

// gid
