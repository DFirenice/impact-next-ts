const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        required: [true, 'Username is required!'],
        type: String
    },
    email: {
        required: [true, 'Each user should have an email!'],
        validate: [isEmail, 'Email is invalid!'],
        type: String
    },
    password: {
        minlegth: [8, 'Password must be at least 8 chars!'],
        required: [true, 'Password is required!'],
        type: String
    }
})

const User = mongoose.Model('user', userSchema)
module.exports = User