import mongoose from 'mongoose'
const UserModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
})

export default mongoose.model('User', UserModel)