import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { createProject, sendCommentFromUserAndAddComment, sendInfoFromUserToTelegram } from "./logic/logic.js";
const app = express()
dotenv.config()
app.use(cors())
// import { register } from "./logic/auth.js";
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER
app.use(express.json())

// app.post('/api/register', register)
app.post('/api/add', createProject)
app.post('/api/telegram/info_user', sendInfoFromUserToTelegram)
app.post('/api/telegram/comment_user', sendCommentFromUserAndAddComment)
async function start() {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.u5sgw90.mongodb.net/${DB_NAME}?appName=Cluster0`)
}
app.listen(PORT, () => console.log(`Started on ${PORT}`))

start()