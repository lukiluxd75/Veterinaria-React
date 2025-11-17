import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "veterinaria",
  waitForConnections: true,
  connectionLimit: 10
});

export default db;
