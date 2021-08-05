import express, { Request, Response } from "express";
import { saveData, readData } from "../controllers/game.controller";
const router = express.Router();

router.get("/", readData);

router.post("/", saveData);

export default router;
