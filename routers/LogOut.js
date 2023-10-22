import express from 'express';
import Logout from '../controllers/LogOut.js';
const router = express.Router()

router.post('/logout',Logout)

export default router