const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());





// testing
app.get("/", (req, res) => {
  res.send("shutter testing server is running");
});
app.listen(port, () => {
  console.log(`shutter server is running on port ${port}`);
});
