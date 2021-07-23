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
  const projectId = req.query.id
  const status = req.query.status
  if (projectId && status) {
    Phase.find({ projectId, status })
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: 'Not found user with id ' + projectId })
        } else {
          res.send(data)
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: 'Erro retrieving user with id ' + projectId })
      })
  } else if (projectId) {
    Phase.find({ projectId })
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: 'Not found user with id ' + projectId })
        } else {
          res.send(data)
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: 'Erro retrieving user with id ' + projectId })
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

// Update a new idetified Phase by id

exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' })
  }
  const status =req.body.data.status;
  const id = req.params.id;
  if (status === 'queued') {
    console.log('UPDATE ONGOING');
    Phase.findByIdAndUpdate(id, {status :"ongoing"}, { useFindAndModify: false })
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
   else if (status === 'ongoing') {
    console.log('UPDATE QUEUED');
    Phase.findByIdAndUpdate(id, {status :"queued"}, { useFindAndModify: false })
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
     else  {
    console.log('UPDATE ACTIVE');
    Phase.findByIdAndUpdate(id, body.re, { useFindAndModify: false })
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
