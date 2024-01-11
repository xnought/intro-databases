import express from "express";
import { connectMySQLPool } from "./db-connector.js";

const PORT = 8020;
const app = express();
const pool = connectMySQLPool();

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
