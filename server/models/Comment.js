import mongoose from 'mongoose'
const CommentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true})

export default mongoose.model('Comment', CommentModel)