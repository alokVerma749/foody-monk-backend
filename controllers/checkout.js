export const checkout = (req, res) => {
    console.log(req.user);
    res.json({
        success: true,
        name: req.user.name,
        email: req.user.email,
        address: req.user.address,
    });
} 