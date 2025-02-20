import express from "express";
import cors from "cors";
import db from "./connect.js";

const app = express();

app.use(cors());

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
});
