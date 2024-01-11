import mysql from "mysql";

function connectMySQLPool() {
	const ONID = "bertuccd";
	const CLASS = "cs340";
	const ID = `${CLASS}_${ONID}`;
	const pool = mysql.createPool({
		connectionLimit: 10,
		host: "classmysql.engr.oregonstate.edu",
		user: ID,
		password: "7022",
		database: ID,
	});
	return pool;
}

export { connectMySQLPool };
