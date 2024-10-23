require('dotenv').config()
const config = require('./config')

const express = require('express')
const mongoose = require('mongoose')

const Project = require('./src/models/project')

const cors = require('cors')
const app = express()

// Connection to the DB
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('[Success] Connected to DB')
        app.listen(config.PORT, () => {
            console.log(`[Success] Server is running on port: ${config.PORT}`)
        })
    }).catch(err => console.log(err))

app.use(cors())

app.get('/api/projects', (req, res) => {
    Project.find()
        .then(result => {
            res.send(result)
        }).catch(err => console.log(err))
})

app.get('/api/generate-project', (req, res) => {
    try {
        const testProject = new Project({
            id: '0',
            name: 'Super test project',
            type: 'private',
            members: ['firenic']
        })

        testProject.save()
    } catch (err) {
        console.log(err)
    } finally { res.send('Operation ended') }
})