import mongoose from "mongoose"
const Schema = mongoose.Schema

const deliveryAgentSchema = new Schema({

})

const DeliveryAgent = mongoose.model('DeliveryAgent',deliveryAgentSchema)
export default DeliveryAgent