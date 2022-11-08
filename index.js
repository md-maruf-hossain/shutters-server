const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

async function run(){
  try{
    const serviceCollection = client.db('shutterPhotography').collection('services')

    // multiple data
    app.get('/services', async(req, res)=>{
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    // single data
    app.get('/service/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const result = await serviceCollection.findOne(query);
      res.send(result);
    })
  }
  finally{

  }
}
run().catch(err => console.error(err));



// testing
app.get("/", (req, res) => {
  res.send("shutter testing server is running");
});
app.listen(port, () => {
  console.log(`shutter server is running on port ${port}`);
});
