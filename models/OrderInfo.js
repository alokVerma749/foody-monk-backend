import mongoose from "mongoose";
const { Schema } = mongoose;

const orderInfoSchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    payment: {
        type: Boolean,
        required: true
    },
    cartItems: {
        type: Array,
    },
    totalPrice: {
        type: Number
    },
})


export default mongoose.model('Order', orderInfoSchema);