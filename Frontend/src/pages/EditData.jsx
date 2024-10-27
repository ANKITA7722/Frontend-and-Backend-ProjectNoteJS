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
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setMydata((Values) => ({ ...Values, [name]: value }));
        console.log(mydata);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let api = "http://localhost:8000/employees/employeeeditsave";
        axios.post(api, mydata).then((res) => {
            alert("Data updated!");
        });
    };

    return (
        <>
            <h1>Edit Employee Data</h1>
            <div className="EditContainer">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmpNo">
                        <Form.Label>Edit Employee Number</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Employee Number" 
                            name="empno"
                            value={mydata.empno || ''} 
                            onChange={handleInput} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Edit Employee Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Employee Name" 
                            name="name"
                            value={mydata.name || ''} 
                            onChange={handleInput} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Edit Employee City</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Employee City" 
                            name="city"
                            value={mydata.city || ''} 
                            onChange={handleInput} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSalary">
                        <Form.Label>Edit Employee Salary</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Employee Salary" 
                            name="salary"
                            value={mydata.salary || ''} 
                            onChange={handleInput} 
                        />
                    </Form.Group>

                    <button type="submit">Save Data</button>
                </Form>
            </div>
        </>
    );
};

export default EditData;
