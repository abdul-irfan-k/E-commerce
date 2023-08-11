import express from 'express'
import path from 'path'
import multer from 'multer'
import * as adminController from '../controllers/adminController.js'
import { fileURLToPath } from 'node:url';

const router = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'public', 'asset', 'image', 'user'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})
const upload = multer({ storage: storage })


router.post('/addProduct')
router.post('/modifyProduct')
router.post('/removeProduct')

router.post('/addBanner', upload.single('BANNERIMAGE'), adminController.addBanner)
router.post('/modifyBanner', upload.single('BANNERIMAGE'), adminController.modifyBanner)
router.post('/removeBanner', adminController.removeBanner)

router.post('/addCategory', upload.single('CATEGORYIMAGE'), adminController.addCategory)
router.post('/modifyCategory', upload.single('CATEGORYIMAGE'), adminController.modifyCategory)
router.post('/blockCategory')
router.post('/removeCategory', adminController.removeCategory)

router.post('/addEmployee')
router.post('/modifyEmployee')
router.post('/removeEmployee')

router.post('/addDeliveryAgent')
router.post('/modifyDeliveryAgent')

router.post('/addCoupon')
router.post('/modifyCoupon')
router.post('/removeCoupon')

router.post('/blockUser')

router.post('/cancelOrder')
router.post('/proceedOrder')

router.post('/notifyUser')

router.post('/getReviewOfProdcuts')
router.post('/respondReviewOfProdcuts')
router.post('/') // answer user questions about the product 

router.post('/addBanner')
router.post('/modifyBanner') // modify and delete 

router.post('/changeLogo')

router.post('/getTrendingProduct')
router.post('/getEmployeeWorkingDetail')
router.post('/getSeasonOrderDeatil')
router.post('/getSeasonDeliveryDeatil')
router.post('/getSeasonProfitDeatil')



router.post('/excel-data', upload.single('IMAGE'), (req, res) => {
    try {
        console.log(req.url)
        console.log(req.file)

        // const file = xlsx.readFile(req.file.path)
        // console.log(file)
        // const data = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
        // console.log(data)
    } catch (error) {
        console.log('-----------')
        console.log(error)
    }
})
export default router