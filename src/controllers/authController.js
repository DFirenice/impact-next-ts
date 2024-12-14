const User = require('../models/User')

// Errors handler
const handleErrors = (err) => {
    const errors  = { username: '', email: '', password: '' }
    
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
    if (err.code === 11000 && err.message.includes('E11000 duplicate key error collection')) {
        errors.username = err.keyPattern.username === 1 ? 'Username is already in use!' : ''
        errors.email = err.keyPattern.email === 1 ? 'Email is already in use!' : ''
    }

    return { errors }
}

module.exports.login_get = (req, res) => {
    res.send('[Controller] LOGIN GET REQUEST HANDLED!')
}

module.exports.login_post = (req, res) => {
    res.send('[Controller] LOGIN POST REQUEST HANDLED!')
}

module.exports.signup_get = (req, res) => {
    res.send('[Controller] SIGNUP GET REQUEST HANDLED!')
}

module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.create({ username, email, password })
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(handleErrors(err))
    }
}