const express = require("express");
const route = express.Router();
const empController = require("../controllers/empControllers");

route.post("/employeesave", empController.empSave);
route.get("/employeedisplay", empController.empDataDisplay);
route.post("/employeesearch", empController.empDataSearch);
route.get("/employeedatadelete", empController.empDataDelete);
route.post("/employeeeditdata", empController.empEditData);
route.get("/employeeupdatedisplay",empController.empUpdateDataDisplay)
route.post("/employeeeditsave", empController.empEditDataSave);

module.exports = route;
