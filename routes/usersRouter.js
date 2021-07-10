const express = require('express')
const {
  getUsers,
  addUser,
  removeUser,
} = require('../controllers/usersController')
const avatarUpload = require('../middlewares/users/avatarUpload')
const {
  addUserValidators,
  addUserValidationHandler,
} = require('../middlewares/users/userValidators')

const userRouter = express.Router()

// users page
userRouter.get('/', getUsers)

// add user
userRouter.post(
  '/',
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
)

// remove user
userRouter.delete('/:id', removeUser)

module.exports = userRouter
