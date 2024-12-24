const User = require('../models/User')
const jwt = require('jsonwebtoken')

const { genAccessToken, genRefreshToken } = require('../utils/genTokens')

// Errors handler
const handleErrors = (err) => {
    const errors  = { username: '', email: '', password: '', root: '' }

    // On login errors
    if (err.message === 'Incorrect email!') { errors.root = err.message }
    if (err.message === 'Incorrect password!') { errors.password = err.message }
    
     // Handle validation errors
     if (err.message.startsWith('user validation failed:')) {
        const message = err.message.replace('user validation failed: ', '')
        const fields = message.split(', ')

        fields.forEach(fieldError => {
            const [field, msg] = fieldError.split(': ')
            if (field && msg) {
                errors[field.trim()] = msg.trim()
            }
        })
    }
    
    // Check if data already registered
    if (err.code === 11000) {
        errors.username = err.keyPattern.username === 1 ? 'Username is already in use!' : ''
        errors.email = err.keyPattern.email === 1 ? 'Email is already in use!' : ''
    }

    return errors
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login({ email, password })

        const token = genAccessToken(user._id)
        const refresh = genRefreshToken(user._id)

        res.status(200).send({ user, token, refresh })
    }

    catch (err) {
        const errors = handleErrors(err)
        res.status(400).send({ errors })
    }
}

module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.create({ username, email, password })

        const token = genAccessToken(user._id)
        const refresh = genRefreshToken(user._id)

        // Removing password
        const response = { ...user.toObject() }
        delete response.password

        res.status(201).send({ user: response, token, refresh })
    }
    
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).send({ errors })
    }
}