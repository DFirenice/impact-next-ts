const mongoose = require('mongoose')

const Schema = mongoose.Schema
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['public', 'private'],
        required: true
    },
    members: {
        type: [String],
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

const Project = mongoose.model(
    'project',
    projectSchema
)

module.exports = Project