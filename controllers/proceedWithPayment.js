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
