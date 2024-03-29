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

app.use("/api", gameRoutes);

/* Start server */
app.listen(PORT, (): void => {
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
