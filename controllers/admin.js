import Order from "../models/OrderInfo.js";
import Cuisine from "../models/Cuisine.js";

export const addCuisine = async (req, res) => {
    try {
        const { name, description, items, image } = req.body;
        if (!name || !description) {
            return res.status(404).json({
                success: false,
                message: 'fill all required fields'
            })
        }

        const cuisine = new Cuisine({
            name,
            description,
            items,
            image
        })
        const response = await cuisine.save();
        if (!response) {
            return res.status(200).json({
                success: false,
                message: 'cuisine upload failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'cuisine added successfully',
            response
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getOrderDetails = async (req, res) => {
    try {
        const { username } = req.user;
        const orders = await Order.find()
        if (!orders) {
            res.status(500).json({
                success: false,
                message: 'orders fetching failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'orders fetched successfully',
            orders,
            username
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(500).json({
                success: false,
                message: "can't find order id"
            })
        }
        const deletedOrder = await Order.findByIdAndDelete(id)
        if (!deletedOrder) {
            res.status(500).json({
                success: false,
                message: 'todo deletion failed'
            })
        } else {
            const orders = await Order.find()
            res.status(200).json({
                success: true,
                message: 'order deleted successfully',
                deletedOrder,
                orders
            })
        }
    } catch (error) {
        throw new Error(error.message || 'Error')
    }
}