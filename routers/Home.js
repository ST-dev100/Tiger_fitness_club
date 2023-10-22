import express from 'express'
import List from '../controllers/Home.js'
import CheckAutho from '../controllers/CheckAuth.js';

const router = express.Router()

router.get('/home',CheckAutho,List)
                                             
export default router