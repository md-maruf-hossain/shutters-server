const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// backend server

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3s0wivp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






// testing
app.get("/", (req, res) => {
  res.send("shutter testing server is running");
});
app.listen(port, () => {
  console.log(`shutter server is running on port ${port}`);
});
