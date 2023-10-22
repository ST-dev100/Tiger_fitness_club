import express from 'express'
import List from '../controllers/AthControl.js'
import CheckAutho from '../controllers/CheckAuth.js';

const router = express.Router()

router.get('/list',CheckAutho,List)
                                             
export default router