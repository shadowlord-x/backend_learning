import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//accessing cookies of user's browsers from server
app.use(cors({
  origin: process.env.CORS_ORIGIN, //which origins we allowing, like only our frontend or some else
  credentials: true
}))

app.use(express.json({limit: "16kb"})) //only a limit, we dont wanna crash
app.use(express.urlencoded({extended: true, limit:"16kb"})) //makes sure that special characters like space which are specifically encoded
app.use(express.static("public"))
app.use(cookieParser())

const app = express()

export {app}