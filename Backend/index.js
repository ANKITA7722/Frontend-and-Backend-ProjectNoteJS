const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require("mongoose")
require('dotenv').config()
const empRoute = require("./routes/employeeRoutes");

mongoose.connect(process.env.DBCONNECTION).then(() => {
    console.log("DB succesfully Connected")
});

const port = process.env.PORT || 3000
app.use(cors());
//body-parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/employees",empRoute);
app.listen(port, () => {
    console.log(`server run on ${port}`);
})