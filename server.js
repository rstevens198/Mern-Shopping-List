<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
=======
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')
>>>>>>> parent of b32aa9a (Revert "added jsonwebtoken and auth in the backend")

const app = express();

// Bodyparser Middleware
app.use(express.json());

//DB Config
<<<<<<< HEAD
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
=======
const db = config.get('mongoURI');

//connect to Mongo
mongoose.connect(db, {
    useNewURParser: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
>>>>>>> parent of b32aa9a (Revert "added jsonwebtoken and auth in the backend")

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set the static folder
  app.use(express.static("client/build"));

  app.get("*", (reg, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port ${port}"));
