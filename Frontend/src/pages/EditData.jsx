import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const EditData = () => {
    const { empid } = useParams();
    const [mydata, setMydata] = useState({});

    const loadData = () => {
        let api = "http://localhost:8000/employees/employeeeditdata";
        axios.post(api, { id: empid }).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        })
    }


    useEffect(() => {
        loadData();
    }, [])

    const handleInput = (e) => {
        let name = e.target.name;
        let value =e.target.value;
        setMydata(values=>({...values, [name]:value}));
        console.log(mydata);

    }

    const handlSubmit = ()=>{
        let api="http://localhost:8000/employees/employeeeditsave";
        axios.post(api, mydata).then((res)=>{
            alert("Data updated!!!");
        })
    }

    return (
        <>
            <h1> Edit Employee data</h1>
            <div className="EditContainer">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit Employee Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.empno} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.name} onChange={handleInput}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit Employee city</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.city} onChange={handleInput}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit Employee salary</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.salary} onChange={handleInput}/>
                    </Form.Group>
                    <button type="submit" onClick={handlSubmit}>Save Data</button>
                </Form>
            </div>
        </>
    )
}
export default EditData;