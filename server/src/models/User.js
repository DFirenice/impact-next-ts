const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

// NOTE: It's important for validation sentence to end on '!'
// Otherwise, validation in 'authController.js' won't work

const userSchema = new mongoose.Schema({
    username: {
        minlength: [4, 'Username must be at least 4 chars!'],
        required: [true, 'Username is required!'],
        unique: true,
        type: String
    },
    email: {
        required: [true, 'Email is required!'],
        validate: [isEmail, 'Email is invalid!'],
        unique: true,
        type: String
    },
    password: {
        minlength: [8, 'Password must be at least 8 chars!'],
        required: [true, 'Password is required!'],
        type: String
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(this.password, salt)
    this.password = hashed
    next()
})

const User = mongoose.model('user', userSchema)
module.exports = User