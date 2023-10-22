import express from 'express'
import Pass from '../controllers/Pass.js'
import PassPost from '../controllers/passPost.js'
import CheckAutho from '../controllers/CheckAuth.js';

const router = express.Router()

router.get('/pass',CheckAutho,Pass)
router.post('/pass',PassPost)

export default router;