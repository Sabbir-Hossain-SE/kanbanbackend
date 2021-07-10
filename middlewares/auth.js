// external imports
const express = require('express')
const { check } = require('express-validator')

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require('../controllers/loginController')

const avatarUpload = require('../middlewares/users/avatarUpload')
const {
  addUserValidators,
  addUserValidationHandler,
} = require('../middlewares/users/userValidators')

const router = express.Router()

// users page
router.get('/', getUsers)

// add user
router.post(
  '/',
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
)

// remove user
router.delete('/:id', removeUser)

module.exports = router
