import fs from "fs";
import path from "path";

const databasePath: string = "./gameData.json";

export const writeGameMode = (board: Array<string>, nextPlayer: string) => {
  const game = { board, nextPlayer };

  try {
    fs.writeFileSync(databasePath, JSON.stringify(game), "utf8");
    return "Data saved to db";
  } catch (err) {
    return { error: err.message };
  }
};

export const getGameMode = () => {
  try {
    let data = fs.readFileSync(databasePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return { error: err.message };
  }
};
