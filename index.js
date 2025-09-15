// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// ahasanhabibpolash420_db_user    real username: ahassh
// WagW40aXjH4YK3HC

// from  database access password : OBoveqdbY5xdq1ck
// user: ahasshDBFirst

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const cros = require("cors");
const app = express("cros");
const port = process.env.PORT || 3000;
app.use(cros());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ahassh.9fhai46.mongodb.net/?retryWrites=true&w=majority&appName=ahassh`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("coffee crud");
});
app.listen(port, () => {
  console.log(`coffee server is getting on port`);
});
