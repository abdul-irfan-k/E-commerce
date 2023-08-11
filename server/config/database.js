import mongoose from 'mongoose'

const connectDB = async (callBackFunc) => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL)
        callBackFunc()
    } catch (error) {
        console.log(error)
    }
}

export default connectDB