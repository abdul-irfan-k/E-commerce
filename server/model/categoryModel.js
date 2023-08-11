import mongoose from "mongoose"
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { type: String, requried: true },
    imageUrl: { type: String, requried: true },
    discount: {
        discountPrice: { type: Number },
        dicountType: { type: String }, //Number or Percentage
        discountStartDate: { type: Date },
        discountEndDate: { type: Date },
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDeleted:{
        type: Boolean,
        default: false,
    }
})

const Category = mongoose.model('Category', categorySchema)
export default Category 