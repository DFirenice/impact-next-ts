// api/...
const { Router } = require('express')
const userController = require('../controllers/userController')

const router = Router()

router.post(
    '/upload-avatar',
    userController.multer_upload_avatar.single('avatar'),
    userController.upload_avatar_post
)

router.get('/get-user', userController.get_user)

router.delete('/remove-avatar', userController.remove_avatar_post)

module.exports = router