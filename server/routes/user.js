import express from 'express'
import multer from 'multer'
import path from 'path'
import * as userController from '../controllers/userController.js'
import { fileURLToPath } from 'node:url';
import { verifyAuthenticatedUser } from '../middleware/authMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'public', 'upload'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})
const upload = multer({ storage: storage })

const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'public', 'asset', 'image','user'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' +file.mimetype.split('/')[1])
    }
})
const userUpload = multer({ storage: userStorage })

router.post('/addToCart',verifyAuthenticatedUser,(req,res) => console.log('addtocart'))
router.post('/orderProduct')
router.post('/cancelOrder')
router.post('/returnProduct')
router.post('/addCard')
router.post('/verifyCoupon', userController.verifyCoupon)

router.post('/signup', userController.signUpUser)
router.post('/login', userController.loginUser)
router.post('/loginWithGithub', userController.loginWithGithub)
router.post('/loginWithLinkedIn', userController.loginWithLinkedIn)
router.post('/loginWithTwitter', userController.loginWithTwitter)

router.post('/updateProfileImage', userUpload.single('PROFILEIMAGE'), userController.editProfileImage)
router.post('/sendSms', userController.sendMessage)
router.post('/sendEmail', userController.sendOtpWithEmail)
router.post('/verifyUser', userController.verifyAccount)
router.post('requestVerifyUser')
router.post('/excel-data', upload.single('IMAGE'), (req, res) => {
    console.log(req.url)
})

export default router   