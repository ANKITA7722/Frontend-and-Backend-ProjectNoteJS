const EmpModel = require("../modules/employeeModel");


const empSave = async (req, res) => {
    // res.send("data succefuuly save!!!!")
    const { empno, name, city, salary } = req.body;
    try {
        const employees = await EmpModel.create({
            empno:empno,
            name:name,
            city:city,
            salary:salary
        });
        res.status(200).json(employees);
    } catch (error) {
        
        res.status(404).json({ error: "Failed to save employee", message: error.message });
    }
};
module.exports = {
    empSave
};
