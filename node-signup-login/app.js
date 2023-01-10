const express = require("express");
const app = express();
const connection = require("./database/connection");
const user = require("./routes/user");
const cors = require("cors");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname,'../vue-signup/public/index.html'))
  res.send("This is test");
});

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json()) use as a middleware
app.use(express.json());

// Using Express middleware
app.use("/user", user);

app.listen(PORT, () => {
  console.log(`app is listening on: http://localhost:${PORT}`);
});
