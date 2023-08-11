import mongoose from "mongoose"
const schema = mongoose.Schema

const dogSchema = new schema({
    name: {
        type: String
    },
    dogLength: {
        type: Number, default: 100
    },
    Owner: {
        type: mongoose.Types.ObjectId, ref: 'Owner'
    }
})


const ownerSchema = new schema({
    ownerName: {
        type: String,
    },
    dogCollection: {
        type: mongoose.Types.ObjectId, ref: 'Dog'
    }
})



const Dog = mongoose.model("Dog", dogSchema)
const Owner = mongoose.model("Owner", ownerSchema)
export {Dog,Owner}
