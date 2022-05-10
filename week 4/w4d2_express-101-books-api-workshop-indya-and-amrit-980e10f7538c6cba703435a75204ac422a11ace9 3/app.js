import express from "express";
import books from "./books-data.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the root path!" });
});
app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = books.find((book) => {
    return book.id === id;
  });
  res.json({ success: "true", payload: data });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
