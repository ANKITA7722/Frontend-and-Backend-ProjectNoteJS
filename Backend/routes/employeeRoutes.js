const express = require("express");
 const route = express.Router();
const empController = require("../controllers/empControllers");

route.post("/employeesave", empController.empSave);



 module.exports = route;
