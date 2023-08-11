import mongoose from "mongoose"
const Schema = mongoose.Schema

const specialOfferSchema = new Schema({

})

const SpecialOffer = mongoose.model('SpecialOffer',specialOfferSchema)
export default SpecialOffer