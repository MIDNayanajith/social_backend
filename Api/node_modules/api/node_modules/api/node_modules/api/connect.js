import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "social", // replace with your database name
});
