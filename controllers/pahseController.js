var Phase = require('../models/ProjectPhase')

// create and save new Phase
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty!' })
    return
  }
  const phase = new Phase({
    ...req.body,
  })
  phase
    .save(phase)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while creating a create operation',
      })
    })
}

// retrieve and return all users/ retrive and return a single Phase
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id

    Phase.findById(id)
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
    Phase.find()
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

// Update a new idetified Phase by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' })
  }

  const id = req.params.id
  Phase.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

// Delete a user with specified Phase id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Phase.findByIdAndDelete(id)
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
