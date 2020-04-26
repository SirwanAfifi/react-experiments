import app from "./app";

const server = app.listen(8000, () => {
  console.log("Listen on port 8000");
});

export default server;
