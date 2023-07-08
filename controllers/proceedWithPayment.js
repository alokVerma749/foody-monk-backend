import Order from "../models/OrderInfo.js";

export const proceedwithPayment = async (req, res) => {
    try {
        const { name, address, email, payment, cartItems, totalPrice } = req.body;
        if (!name || !address || !email) {
            return res.status(404).json({
                success: false,
                message: 'order not placed'
            })
        }

        if (!payment) {
            return res.status(400).json({
                success: false,
                message: 'problem with payment'
            })
        }

        const order = new Order({
            name,
            address,
            email,
            payment,
            cartItems,
            totalPrice
        })

        const response = await order.save()
        if (!response) {
            return res.status(200).json({
                success: false,
                message: 'order failed'
            })
        }
        res.status(200).json({
            success: true,
            message: 'order has been placed',
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