const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //allows the req to continue to the next middleware
});
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>hello from express</h1>");
});

app.listen(3000);
