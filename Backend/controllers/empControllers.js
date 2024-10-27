const EmpModel = require("../modules/employeeModel");


const empSave = async (req, res) => {
    const { empno, name, city, salary } = req.body;
    try {
        const employees = await EmpModel.create({
            empno,
            name,
            city,
            salary
        });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: "Error saving employee data" });
    }
};


const empDataDisplay = async (req, res) => {
    try {
        const empdata = await EmpModel.find();
        res.status(200).json(empdata);
    } catch (error) {
        res.status(500).json({ error: "Data from MongoDB not found" });
    }
};
const empDataSearch = async (req, res) => {
    const { empno } = req.body;
    try {
        const mydata = await EmpModel.find({ empno });
        res.status(200).json(mydata);
    } catch (error) {
        res.status(500).json({ error: "Error searching employee data" });
    }
};
const empUpdateDataDisplay = async (req, res) => {
    try {
        const data = await EmpModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching employee data" });
    }
};

const empDataDelete = async (req, res) => {
    const myid = req.body.id;
    try {
        await EmpModel.findByIdAndDelete(myid);
        res.status(200).json({ message: "Record deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting employee record" });
    }
};

const empEditData = async (req, res) => {
    const { id } = req.body;
    try {
        const empdata = await EmpModel.findById(id);
        res.status(200).json(empdata);
    } catch (error) {
        res.status(500).json({ error: "Error fetching employee data" });
    }
};
const empEditDataSave = async (req, res) => {
    const { _id, empno, name, city, salary } = req.body;
    try {
        await EmpModel.findByIdAndUpdate(_id, {
            empno,
            name,
            city,
            salary
        });
        res.status(200).json({ message: "Data successfully updated" });
    } catch (error) {
        res.status(500).json({ error: "Error updating employee data" });
    }
};
const empSearchByName = async (req, res) => {
    const { empname } = req.query;
    try {
        const docs = await EmpModel.find({ name: { $regex: empname, $options: "i" } });
        res.status(200).json(docs);
    } catch (error) {
        res.status(500).json({ error: "Error searching employee by name" });
    }
};

module.exports = {
    empSave,
    empDataDisplay,
    empDataSearch,
    empUpdateDataDisplay,
    empEditData,
    empDataDelete,
    empEditDataSave,
    empSearchByName
};
