import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {

    const { name, email, password } = req.body
    //validate
    if (!name) {
        next("name is required");
    } if (!email) {
        next("email is required");
    } if (!password) {
        next("password is required");
    }
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
        next("Email already register, Please login")
    }
    const user = await userModel.create({ name, email, password })
    //token

    const token = user.createJWT();
    res.status(201).send({
        success: true,
        mesaage: 'User Created Successfully',
        user: {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            locations: user.locations
        },
        token
    });

}