import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
})


export default mongoose.model('Contact', contactSchema);