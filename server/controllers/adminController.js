import AsyncHandler from 'express-async-handler'
import Categoryschema from '../model/categoryModel.js'
import Bannerschema from '../model/bannerModel.js'
import Productschema from '../model/productModel.js'

export const addCategory = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { name, discount } = req.body

    if (req?.file?.filename == undefined) return res.status(400).json({ isValid: false })
    const category = new Categoryschema({ name, discount, imageUrl: req?.file?.filename })
    category.save()

    return res.status(200).json({ isValid: true })
})


export const modifyCategory = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { name, discount, _id } = req.body

    await Categoryschema.findByIdAndUpdate(_id, { name, discount })
    return res.status(200).json({ isValid: true })
})

export const removeCategory = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { _id } = req.body

    const category = await Categoryschema.findByIdAndUpdate(_id, { isDeleted: true })
    return res.status(200).json({ isValid: true })
})


export const addBanner = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { title, content } = req.body

    if (req?.file?.filename == undefined) return res.status(400).json({ isValid: false })
    const banner = new Bannerschema({ title, content, imageUrl: req?.file?.filename })
    banner.save()

    return res.status(200).json({ isValid: true })
})

export const modifyBanner = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { title, content, _id } = req.body

    await Bannerschema.findByIdAndUpdate(_id, { title, content })
    return res.status(200).json({ isValid: true })
})

export const removeBanner = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { _id } = req.body

    await Bannerschema.findByIdAndUpdate(_id, { isDeleted: true })
    return res.status(200).json({ isValid: true })
})


export const addProduct = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { name, title, productNumber, price, modelNumber, category, stock, imageUrl, details } = req.body

    const product = new Productschema({ name, title, productNumber, price, modelNumber, category, stock, imageUrl, details })
    await product.save()

    return res.status(200).json({ isValid: true })
})


