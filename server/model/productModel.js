import mongoose from "mongoose"
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, requried: true },
    title: { type: String, requried: true },
    productNumber: { type: String, required: true },
    price: { type: Number, requried: true },
    modelNumber: { type: String, requried: true },
    category: { type: String, requried: true },
    stock: { type: Number, requried: true },
    imageUrl: { type: [String], requried: true },

    details: {
        color: { type: String, required: true },
        size: { type: String, required: true },
        additionalDetails: { type: Object, default: {} }
    }
})

const Product = mongoose.model('Product', productSchema)
export default Product