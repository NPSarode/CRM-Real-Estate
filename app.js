import { config } from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import { UsersRoutes } from './Routes/Users.js'
import { authRouter } from './Routes/Auth.js'
import { LeadsRouter } from './Routes/Leads.js'

export const app = express()


config({
    path: './.env'
})

app.use(express.json())
app.use(cookieParser())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type,Authorization',
    origin: process.env.FRONT_END_URI,
    credentials: true
}))


app.use(authRouter)
app.use(UsersRoutes)
app.use(LeadsRouter)