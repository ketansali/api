const User = require('../models/user')
const jwt = require('jsonwebtoken');

exports.Signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) {
                return res.status(400).json({
                    message: "User Already Register.."
                })
            }
        })
    const _user = new User(req.body)
    _user.save((error, data) => {
        if (error) return res.status(400).json({ error })
        if (data) {
            return res.status(400).json({
                message: "User Register Successfully"
            })
        }
    })

}

exports.Signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error })
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY)
                    return res.status(201).json({ token, user })
                } else {
                    return res.status(400).json({ message: "Invalide Password" })
                }
            }
        })
}

exports.getUser = (req, res) => {
    User.find({})
        .exec((error, data) => {
            if (error) return res.status(400).json({ error })

            if (data) {
                return res.status(400).json({ data })
            }
        })
}