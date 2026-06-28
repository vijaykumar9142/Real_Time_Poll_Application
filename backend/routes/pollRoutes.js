import express from "express";

import {
createPoll,
getPolls,
votePoll,
} from "../controllers/pollController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
"/create",
protect,
createPoll
);

router.get(
"/all",
getPolls
);

router.post(
"/vote",
protect,
votePoll
);

export default router;
