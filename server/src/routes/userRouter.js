const { Router } = require('express')
const userController = require('../controllers/userController')

const router = Router()

router.post(
    '/upload-avatar',
    userController.multer_upload_avatar.single('avatar'),
    userController.upload_avatar_post
)

module.exports = router