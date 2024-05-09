import User from '../models/User.js'
import Contact from '../models/Contact.js'

export const signup = async (req, res) => {
  try {
    const { name, address, email, password } = req.body

    if (!name || !address || !email || !password) {
      return res.status(404).json({
        success: false,
        message: 'all fields are required'
      })
    }

    const isUser = await User.findOne({ email })
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: 'user Already present'
      })
    }

    const user = new User({
      name,
      address,
      email,
      password
    })

    const response = await user.save()
    if (!response) {
      return res.status(200).json({
        success: false,
        message: 'user registeration failed'
      })
    }

    res.status(200).json({
      success: true,
      message: 'user registered successfully',
      response
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(500).json({
        success: false,
        message: 'all fields are required'
      })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'user not exists'
      })
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentials'
      })
    }
    const token = await user.generateToken()
    res.status(200).json({
      success: true,
      message: 'user logged in successfully',
      token
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const contact = async (req, res) => {
  try {
    const { email, subject, message } = req.body

    if (!email || !subject) {
      return res.status(404).json({
        success: false,
        message: 'fill required fields'
      })
    }

    const contact = new Contact({
      email,
      subject,
      message
    })
    const response = await contact.save()
    if (!response) {
      return res.status(500).json({
        success: false,
        message: 'message not send'
      })
    }
    res.status(200).json({
      success: true,
      message: 'message send successfully',
      response
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
