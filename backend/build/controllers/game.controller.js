"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = exports.saveData = void 0;
const game_models_1 = require("../models/game.models");
const saveData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { board, nextPlayer } = req.body;
    try {
        const saved = yield game_models_1.writeGameMode(board, nextPlayer);
        res.status(200).json({ message: saved });
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ err: "Unable to save data" });
    }
});
exports.saveData = saveData;
const readData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield game_models_1.getGameMode();
        res.status(200).json({ data });
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ err: "Unable to read data" });
    }
});
exports.readData = readData;
