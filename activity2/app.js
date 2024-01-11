import express from "express";
import { connectMySQLPool } from "./db-connector.js";

const PORT = 8020;
const app = express();
const pool = connectMySQLPool();

app.get("/", (_, response) => {
	pool.query(`DROP TABLE IF EXISTS diagnostic;`, () => {
		pool.query(
			`CREATE TABLE diagnostic (id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);`,
			() => {
				pool.query(
					`INSERT INTO diagnostic (text) VALUES ("MySQL is working!");`,
					() => {
						pool.query(`SELECT * FROM diagnostic;`, (_, result) => {
							response.send(
								"<h1>MySQL Results:</h1>" +
									JSON.stringify(result)
							);
						});
					}
				);
			}
		);
	});
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
