import express, { Request, Response, NextFunction } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({ name: "Sirwan" });
});

export default app;
