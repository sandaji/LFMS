import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { postBook } from "../controllers/bookRequestController.js";

const router = express.Router();

router.route("/").post(protect, postBook);

export default router;
 