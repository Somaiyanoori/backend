import express from "express";
import {
  gerRandomProverb,
  getAllProverbs,
} from "../controller/proverbController.js";

const router = express.Router();

router.get("/", getAllProverbs);
router.get("/random", gerRandomProverb);

export default router;
