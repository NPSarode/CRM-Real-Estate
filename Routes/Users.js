import express from 'express'
import { getUserList } from '../Controller/Users.js';
import { isAuthenticate } from '../Middleware/authentication.js';

export const UsersRoutes = express.Router()

UsersRoutes.get('/users', isAuthenticate, getUserList);