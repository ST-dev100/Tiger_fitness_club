import express from 'express'
import Delete from '../controllers/Delete.js'
const router = express.Router()

router.get("/del/:idd",Delete)

export default router