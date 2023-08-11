import mongoose from "mongoose"
const Schema = mongoose.Schema

const bannerSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDeleted:{
        type: Boolean,
        default: false,
    }
})
const Banner  = mongoose.model('Banner', bannerSchema)
export default Banner