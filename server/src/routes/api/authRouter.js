// ### API ROUTES ###

const { Router } = require('express')
const authController = require('../../controllers/authController')

const router = Router()

// Login requests
router.post('/login', authController.login_post)

// Signup requests
router.post('/signup', authController.signup_post)

module.exports = router