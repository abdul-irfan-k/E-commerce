import mongoose from "mongoose"
const Schema = mongoose.Schema

const productReviewSchema = new Schema({

})

const ProductReview = mongoose.model('ProductReview', productReviewSchema)
export default ProductReview