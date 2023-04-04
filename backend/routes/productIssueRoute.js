import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {issueProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(protect, admin, issueProduct);

export default router;
