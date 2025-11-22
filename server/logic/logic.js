import ProjectModel from '../models/Project.js'
import CommentModdel from '../models/Comment.js'
import UserModel from '../models/User.js'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
export const createProject = async (req, res) => {
    try {
        const {title, description} = req.body
        const project = new ProjectModel({title, description})
        await project.save()

        return res.json({project,  message: "Created successfully."})
    } catch(err) {
        console.log(err)
        return res.status(500).json({message: "Error to create project."})
    }
}
export const sendInfoFromUserToTelegram = async (req, res) => {
    try {
        const {name, message, email, phone} = req.body
        await sendToTelegram(            `📩 <b>New user order</b>\n\n` +
            `👤 Name: ${name}\n` +
            `📞 Phone: ${phone}\n` +
            `📧 Email: ${email}\n` +
            `💬 Message: ${message}`)

        return res.json({ message: "Message sent!" });

    } catch(err) {
        console.log(err)
    }
}
export const sendCommentFromUserAndAddComment = async (req, res) => {
    try {
        const { name, message } = req.body;

        const newComment = new CommentModdel({ name, message });
        await newComment.save();

        await sendToTelegram(
            `📩 <b>New comment</b>\n\n` +
            `👤 Name: ${name}\n` +
            `💬 Message: ${message}`
        );

        return res.status(200).json({ message: 'Comment added.' });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: "Error sending comment" });
    }
};

const sendToTelegram = async (text) => {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

        await axios.post(url, {
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML',
        })
    } catch(err) {
        console.log(err.message)
    }
}