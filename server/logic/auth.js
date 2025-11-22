import UserModel from '../models/User.js'
import bcrypt from 'bcryptjs'
export const register = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await UserModel.findOne({username})
        if(user) return res.status(403).json({message: 'User already exists.'})
        const salt = bcrypt.genSaltSync(8)
        const passwordHash = bcrypt.hashSync(password, salt)
        const newUser = new UserModel({username, password: passwordHash})
        newUser.save()
        return res.status(200).json({newUser, message: 'User is created.'})
    } catch(err) {
        console.log(err)
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await UserModel.findOne({username})
        if(!user) return res.status(403).json({message: 'User is not defined.'})
        const isPasswordCorrect = bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) return res.status(402).json({message: 'Pasword is mot correct.'})
        

    } catch(err) {
        console.log(err)
    }
}