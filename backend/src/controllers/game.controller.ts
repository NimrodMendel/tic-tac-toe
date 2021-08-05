import express, { Request, Response } from "express";
import { getGameMode, writeGameMode } from "../models/game.models";

export const saveData = async (req: Request, res: Response) => {
  const { board, nextPlayer } = req.body;

  try {
    const saved = await writeGameMode(board, nextPlayer);
    res.status(200).json({ message: saved });
  } catch (err) {
    console.error(err);
    res.status(400).json({ err: "Unable to save data" });
  }
};

export const readData = async (req: Request, res: Response) => {
  try {
    const data = await getGameMode();
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(400).json({ err: "Unable to read data" });
  }
};
