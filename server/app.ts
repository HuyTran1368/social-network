import express from "express";
import database_connect from "./src/database";

const app = express();

app.get("/api/", (req, res) =>
  res.json({
    message: "Hello",
  })
);

app.listen(3000, () => console.log("Server is listening on port 3000"));

database_connect();
