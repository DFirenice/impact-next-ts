const multer = require('multer')
const { createClient } = require('@supabase/supabase-js')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
const { ObjectId } = require('mongoose').Types

// Establishing connection & using Service Role to bypass RLS
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_SECRET)

// Multer configuration
const storage = multer.memoryStorage()
module.exports.multer_upload_avatar = multer({ storage })

// UserId getter. Based on authorization header in req
const getUserId = (req) => {
    const token = req.headers.authorization?.split(' ')[1]
    const { id } = jwt.decode(token)
    return id
}

module.exports.upload_avatar_post = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file provided!' })
    }

    const userId = getUserId(req)

    const fileExtension = req.file.originalname.split('.').pop()
    const fileName = `${userId}.${fileExtension}`
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload(fileName, req.file.buffer, { upsert: true })

    if (error) {
        console.log('An error occured while uploading image!', error)
        return res.status(500).json({
            message: 'An error occured while uploading image!',
            error
        })
    }

    // Getting public url to an image on success
    const URLresonse = await supabase.storage.from('avatars').getPublicUrl(fileName)
    const publicUrl = URLresonse?.data.publicUrl || ''

    try {
        const usersCollection = mongoose.connection.collection('users')
        await usersCollection.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { $set: { avatarUrl: publicUrl } }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: `Error updating user's avatar!: ${err}` })
    }

    res.status(200).json({
        message: 'Avatar changed successfully!',
        publicUrl
    })
}

module.exports.get_user = async (req, res) => {
    const userId = getUserId(req)

    try {
        const usersCollection = mongoose.connection.collection('users')
        const user = await usersCollection.findOne({ _id: new ObjectId(userId) })
        delete user.password

        res.status(200).json({ user })
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: `Error obtaining user!: ${err}` })
    }
}

module.exports.remove_avatar_post = async (req, res) => {
    const userId = getUserId(req)

    const usersCollection = mongoose.connection.collection('users')
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) })

    if (!user?.avatarUrl) { return res.status(404).json({ message: `User has already no avatar!` }) }  
    const fileName = user.avatarUrl.split('/').pop()
    
    const { data, error } = await supabase.storage
        .from('avatars')
        .remove([fileName])

    if (error) {
        console.log(`Error removing user's avatar!`, error)
        return res.status(500).json({
            message: `Error removing user's avatar!`,
            error
        })
    }

    try {
        const user = await mongoose.connection.collection('users')
            .findOneAndUpdate(
                { _id: new ObjectId(userId) },
                { $unset: { avatarUrl: "" } },
                { returnDocument: 'after' }
            )
        res.status(200).send({ message: 'Avatar removed successfully!', user })

    } catch (err) {
        console.log('[MongoDB] Error removing avatar: ', err)
        res.status(500).send({ message: 'Avatar removed successfully!' })
    }
}