var Project = require('../models/ProjectDetails')

// create and save new Project
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty!' })
    return
  }
  const project = new Project({
    ...req.body,
  })
  project
    .save(project)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating a create operation',
      })
    })
}

// retrieve and return all users/ retrive and return a single Project
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id

    Project.findById(id)
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
    Project.find()
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

// Update a new idetified Project by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' })
  }

  const id = req.params.id
  Project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete a user with specified Project id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Project.findByIdAndDelete(id)
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
