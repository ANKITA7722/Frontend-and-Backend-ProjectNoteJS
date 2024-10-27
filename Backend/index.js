require('dotenv').config(); 
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const empRoute = require("./routes/employeeRoutes");


const mongoUri = process.env.DBCONNECTION;
if (!mongoUri) {
    console.error("MongoDB connection string (DBCONNECTION) is not defined in .env file");
    process.exit(1); 
}

mongoose.connect(mongoUri)
    .then(() => {
        console.log("DB successfully connected");
    })
    .catch((err) => {
        console.error("DB connection error:", err.message);
        process.exit(1); 
    });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/employees", empRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



