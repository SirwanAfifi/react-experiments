import express, { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";

const app = express();
app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.get("/", (req: Request, res: Response) => {
  res.send({ name: "Sirwan" });
});

app.get("/download", (req: Request, res: Response) => {
  const file = `public/uploads/users.csv`;
  const filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

export default app;
