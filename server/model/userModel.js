import mongoose from "mongoose"
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isVerifiedAccount: { type: Boolean, default: false },
    verificationUsing: { type: [String] }, // phone or email
    address: {},
    card: {},
    coupon: {},
    wishlistProduct: {},
    cartProduct: {},
    orderProduct: {},
    profileImageUrl: { type: String ,default:'user/image/default.jpg'}
})

userSchema.method.matchPassword = function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password)
}
userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        console.log('not modified ')
        next()
    }
    const pass = this.password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    console.log(await bcrypt.hash(pass, salt))

    console.log('this.password', this.password)
    console.log('salt password ', salt)
})



const User = mongoose.model('User', userSchema)
export default User