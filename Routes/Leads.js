import express from 'express'
import { getLeadsByUserId, importFile } from '../Controller/Leads.js'
import { isAuthenticate } from '../Middleware/authentication.js'
import multer from 'multer';

export const LeadsRouter = express.Router()
const upload = multer({ dest: 'uploads/' });

LeadsRouter.post("/leads/import", upload.single('File'), importFile)

LeadsRouter.post("/leads/:id", isAuthenticate, getLeadsByUserId)
