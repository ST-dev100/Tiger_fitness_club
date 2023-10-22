import express from 'express';
import LoginFm from '../controllers/LoginFm.js';
import Login from '../controllers/LoginPost.js';
import CheckAutho from '../controllers/CheckAuth.js';

const router = express.Router()

router.get('/',LoginFm)
router.post('/',Login)                      

export default router;       