import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

app.get("/astronauts", async function (req, res) {
  const returnedData = await getAstronauts();
  res.json({ success: true, payload: returnedData });
});

app.post("/astronauts", function (req, res) {
  const newAstro = req.body;
  createAstronaut(newAstro);
  console.log(newAstro);
  console.log(getAstronauts());
  res.json({ success: true, payload: newAstro });
});

app.get("/astronauts/:id", async function (req, res) {
  const id = req.params.id;
  console.log(id);
  const correctAstro = await getAstronautById(id);
  res.json({ success: true, payload: correctAstro });
});

app.put("/astronauts/:id", async function (req, res) {
  const id = req.params.id;
  const newAstro = req.body;
  const replacedAstro = await replaceAstronautById(id, newAstro);
  res.json({ success: true, payload: await replacedAstro });
});

app.delete("/astronauts/:id", async function (req, res) {
  const id = req.params.id;
  const deletedAstro = await deleteAstronautById(id);
  res.json({ success: true, payload: deletedAstro });
});

app.patch("/astronauts/:id", async function (req, res) {
  const id = req.params.id;
  const updates = req.body;
  const patchedAstro = await updateAstronautById(id, updates);
  res.json({ success: true, payload: patchedAstro });
});

/* Tasks

You have been asked to write the request handlers which manage the coordination of astronauts in outer space. All of the models that
retrieve and manage astronaut data have been written for you, and have been imported above. You must adhere to the principles of
RESTful API design throughout the tasks. Enter 'npm run dev' in your console to start the server. Test your request handlers using 
Postman.

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

// Task 1

Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
