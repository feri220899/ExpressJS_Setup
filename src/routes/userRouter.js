const express = require('express')
const router = express.Router();

const userController = require('../controller/userController.js')
const middleware = require('../middleware/logMiddleware.js')

// gunakan ini untuk menggunakan middleware dengan spresific
const userMiddleware = middleware.logMiddleware

// GET mengandung middleware
router.get('/', userMiddleware ,userController.getAllUser);

// GET detail mengandung middleware
router.get('/:nim', userController.getByNimUser);

// POST
router.post('/', userController.postNewUser);

// PUT
router.put('/:nim', userController.putUpdateUser);

// DELETE
router.delete('/:nim', userController.deleteUser);

module.exports = router;