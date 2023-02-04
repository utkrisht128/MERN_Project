const express = require("express");
const dotenv = require("dotenv");
// const User = require("./models/userSchema");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(require("./router/auth"));
const port = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about",(req, res) => {
  res.send("About");
});
app.get("/contact", (req, res) => {
  res.send("Contact");
});
app.get("/signin", (req, res) => {
  res.send("signin");
});
app.get("/register", (req, res) => {
  res.send("register");
});
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
