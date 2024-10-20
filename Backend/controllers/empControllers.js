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
    let {empno} = req.body;
    const mydata = await EmpModel.find({empno:empno});
    res.send(mydata);
}

const empUpdateDataDisplay=async(req, res)=>{
    const Data= await EmpModel.find();
    res.send(Data);
}

const empDataDelete=async(req, res)=>{
    const myid= req.body.id;
    const Ankita = await  EmpModel.findByIdAndDelete(myid);   
    res.send("record deleted!")
 }


const empEditData = async()=>{
const id = req.body.id;
const Empdata = await EmpModel.findById(id);
res.send(Empdata);    

}

const empEditDataSave=async(req,res)=>{
    const {_id, empno, name, city, salary } = req.body;
    const empdata = await EmpModel.findByIdAndUpdate(_id, {
        empno:empno,
        name:name,
        city:city,
        salary:salary
    })
    res.send("Data Succesfully updated");
}

const empSearchByName=async(req,res)=>{
    let empname= req.query.empname;
    console.log(req.query);
    const docs = await EmpModel.find({empname : {$regex : empname}});
    console.log(docs);
    res.send(docs);
}

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
