"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_controller_1 = require("../controllers/game.controller");
const router = express_1.default.Router();
router.get("/", game_controller_1.readData);
router.post("/", game_controller_1.saveData);
exports.default = router;
