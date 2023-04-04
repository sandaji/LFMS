import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { postMessage } from "../controllers/messageController.js";

const router = express.Router();

router.route("/").post(protect, postMessage);

export default router;
