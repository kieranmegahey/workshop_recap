import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS books (id SERIAL PRIMARY KEY, title TEXT, author TEXT)`;

async function createBooksTable() {
  const res = await query(sqlString);
  console.log("created books table", res);
}

createBooksTable();
