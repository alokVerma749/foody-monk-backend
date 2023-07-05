export const checkout = (req, res) => {
    res.json({
        success: true,
        name: req.user.name,
        email: req.user.userid.email,
        address: req.user.userid.address,
    });
} 