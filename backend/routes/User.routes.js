import express from "express";
import { LikeProfile, getLikes, getUserProfile } from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/like/:username",ensureAuthenticated, LikeProfile);
router.get("/getLikes",ensureAuthenticated,getLikes);
export default router;
