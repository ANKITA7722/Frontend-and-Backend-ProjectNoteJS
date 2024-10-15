const express = require("express");
 const route = express.Router();
const empController = require("../controllers/empControllers");

route.post("/employeesave", empController.empSave);
route.get("/employeedisplay", empController.empDataDisplay);



 module.exports = route;
