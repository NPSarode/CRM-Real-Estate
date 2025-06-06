import express from 'express'
import { login, logout, register } from '../Controller/Auth.js'

export const authRouter = express.Router()

authRouter.get("/logout", logout)

authRouter.post("/login", login)

authRouter.post("/register", register)