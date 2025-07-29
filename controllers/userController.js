import userModel from "../models/userModel.js"

export const userController = async (req, res, next) => {
    const { name, email, lastName, locations } = req.body
    if (!name || !email || !lastName || !locations) {
        next('Please provide all fields')
    }
    const user = await userModel.findOne({ _id: req.user.userId })
    user.name = name
    user.lastName = lastName
    user.email = email
    user.locations = locations

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token,
    })
}