import mongoose from "mongoose";
const { Schema } = mongoose;

const cuisineSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    items: {
        type: Array,
    },
    image: {
        type: String,
    }
})


export default mongoose.model('Cuisine', cuisineSchema);