const express = require('express')
const commonApiRoute = express.Router()

const projectController = require('../controllers/projectController')
const pahseController = require('../controllers/pahseController')
const taskGroupController = require('../controllers/taskGroupController')
const taskController = require('../controllers/taskController')

// API router

/**
 * @description Connect with User API
 * @method GET/POST/PUT/DELETE
 */

// route.post('/api/users', UserController.create)
// route.get('/api/users', UserController.find)
// route.put('/api/users/:id', UserController.update)
// route.delete('/api/users/:id', UserController.delete)
// route.get('/api/users/:email', UserController.findByUserEmail)

/**
 * @description Connect with project API
 * @method GET/POST/PUT/DELETE
 */

commonApiRoute.post('/project', projectController.create)
commonApiRoute.get('/project', projectController.find)
commonApiRoute.put('/project/:id', projectController.update)
commonApiRoute.delete('/project/:id', projectController.delete)

/**
 * @description Connect with pahse Item API
 * @method GET/POST/PUT/DELETE
 */

commonApiRoute.post('/phase', pahseController.create)
commonApiRoute.get('/phase', pahseController.find)
commonApiRoute.put('/phase/:id', pahseController.update)
commonApiRoute.delete('/phase/:id', pahseController.delete)

/**
 * @description Connect with task group API
 * @method GET/POST/PUT/DELETE
 */

commonApiRoute.post('/group', taskGroupController.create)
commonApiRoute.get('/group', taskGroupController.find)
commonApiRoute.put('/group/:id', taskGroupController.update)
commonApiRoute.delete('/group/:id', taskGroupController.delete)

/**
 * @description Connect with task group API
 * @method GET/POST/PUT/DELETE
 */

commonApiRoute.post('/task', taskController.create)
commonApiRoute.get('/task', taskController.find)
commonApiRoute.put('/task/:id', taskController.update)
commonApiRoute.delete('/task/:id', taskController.delete)

module.exports = commonApiRoute
