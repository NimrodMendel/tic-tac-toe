"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameMode = exports.writeGameMode = void 0;
const fs_1 = __importDefault(require("fs"));
const databasePath = "./gameData.json";
const writeGameMode = (board, nextPlayer) => {
    const game = { board, nextPlayer };
    try {
        fs_1.default.writeFileSync(databasePath, JSON.stringify(game), "utf8");
        return "Data saved to db";
    }
    catch (err) {
        return { error: err.message };
    }
};
exports.writeGameMode = writeGameMode;
const getGameMode = () => {
    try {
        let data = fs_1.default.readFileSync(databasePath, "utf-8");
        return JSON.parse(data);
    }
    catch (err) {
        return { error: err.message };
    }
};
exports.getGameMode = getGameMode;
