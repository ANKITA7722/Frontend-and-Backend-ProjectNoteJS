require('dotenv').config(); 
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const empRoute = require("./routes/employeeRoutes");


mongoose.connect(process.env.DBCONNECTION).then(()=>{
console.log("DB connected Succesfully")
});

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/employees", empRoute);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



