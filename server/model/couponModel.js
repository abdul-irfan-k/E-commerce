import mongoose from "mongoose"
const Schema = mongoose.Schema

const couponSchema = new Schema({
    code: { type: String, required: true },
    type: { type: String, required: true }, // Price or Percentage
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    discountPrice: { type: Number, required: true },
    maxDiscountPrice: { type: Number, required: true }, // for Pecentage type coupons 
    minPurchase: { type: Number, required: true }
})

const Coupon = mongoose.model('Coupon', couponSchema)
export default Coupon