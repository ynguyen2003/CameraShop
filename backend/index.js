const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const productRoute = require("./routes/product");

const products = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/product", productRoute)

app.get("/", (req, res) => {
  res.send("Wellcome to our online shop API...");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Server running on ${port}`));

mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB connect successfuly..."))
  .catch((err) => console.log("MongoDB connect failed", err.message));
