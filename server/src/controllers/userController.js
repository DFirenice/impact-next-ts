const fs = require('fs').promises
const multer = require('multer')
const { createClient } = require('@supabase/supabase-js')

// Using Service Role to bypass RLS
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_SECRET)

// Multer configuration
const storage = multer.memoryStorage()
module.exports.multer_upload_avatar = multer({ storage })

module.exports.upload_avatar_post = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file provided!' })
    }

    const fileExtension = req.file.originalname.split('.').pop()
    const fileName = `${req.body.userId}-${Date.now()}.${fileExtension}`
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload(fileName, req.file.buffer, { upsert: true })
    
    if (error) {
        return res.status(500).json({
            message: 'An error occured while uploading image!',
            error
        })
    }

    // Getting public url to an image on success
    const { publicUrl } = await supabase.storage.from('avatars').getPublicUrl(fileName)

    res.status(200).json({
        message: 'Avatar changed successfully!',
        publicUrl
    })
}