import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();
app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.get("/", (req: Request, res: Response) => {
  res.send({ name: "Sirwan" });
});

app.get("/download", (req: Request, res: Response) => {
  const file = `public/uploads/users.csv`;
  res.download(file); // Set disposition and send it.
});

export default app;
