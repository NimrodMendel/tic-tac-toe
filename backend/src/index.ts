import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRoutes from "./routes/game.routes";

const PORT = process.env.PORT || 5000;
const app = express();

/* Middleware */
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* Routes */
app.get("/", (req: Request, res: Response): void => {
  res.send("Hello world");
});
app.use("/api/game", gameRoutes);

/* Start server */
app.listen(PORT, (): void => {
  console.log(`Server is running on port: ${PORT}`);
});
