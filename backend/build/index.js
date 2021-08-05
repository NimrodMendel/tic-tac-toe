"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const game_routes_1 = __importDefault(require("./routes/game.routes"));
const PORT = process.env.PORT || 5000;
const app = express_1.default();
/* Middleware */
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({
    origin: "http://localhost:3000",
    credentials: true,
}));
/* Routes */
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.use("/api", game_routes_1.default);
/* Start server */
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
// import express, { Request, Response } from "express";
// import next from "next";
// import cors from "cors";
// import dotenv from "dotenv";
// import gameRoutes from "./routes/game.routes";
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
// const PORT = process.env.PORT || 5000;
// app.prepare().then(() => {
//   const server = express();
//   /* Middleware */
//   dotenv.config();
//   server.use(express.json());
//   server.use(
//     cors({
//       origin: "http://localhost:3000",
//       credentials: true,
//     })
//   );
//   /* Routes */
//   server.get("/", (req: Request, res: Response) => {
//     res.send("Hello World");
//   });
//   server.use("/api/", gameRoutes);
//   server.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });
