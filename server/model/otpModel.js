import mongoose from "mongoose"
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

const otpSchema = new Schema({
    email: { type: String },
    phone: { type: Number },
    otp: { type: String, required: true },
    verificationType: { type: String },  //email verification
    createdAt: { type: Date, index: { expires: 300 } }
})

otpSchema.methods.verifyOtp = function (otp) {
    return bcrypt.compare(otp, this.otp)
}

otpSchema.pre('save', async function (next) {
    if (!this.isModified) next()
    
    const pass = this.otp
    const salt = await bcrypt.genSalt(10)
    this.otp = await bcrypt.hash(this.otp, salt)
    this.createdAt = Date.now()
})

const OTP = mongoose.model('OTP', otpSchema)
export default OTP