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
        
        res.status(404).json("MongoDb Server No Started...!!!");
    }
};

const empDataDisplay=async(req,res)=>{
    try {
        const empdata = await EmpModel.find();
        res.status(200).json(empdata);
    } catch (error) {
        res.status(404).json("Data from MongoDB not Found..!")
    }
}

const empDataSearch=async(req,res)=>{
    let {empno}=req.body;
    const mydata=await EmpModel.find({empno:empno});
    res.send(mydata);
}

const empEditData=()=>{
    
}
module.exports = {
    empSave,
    empDataDisplay,
    empDataSearch,
    empEditData
};
