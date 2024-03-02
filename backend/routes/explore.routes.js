import express from 'express';
import { exploreRepos } from '../controllers/explore.controller.js';
import { ensureAuthenticated } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/repos/:language',ensureAuthenticated,exploreRepos)

export default router;