import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const EditData=()=>{
    const {empid} = useParams();
    const [mydata, setMydata]=useState({});

    const loadData=()=>{
        let api="http://localhost:8000/employees/employeeeditdata";
        axios.post(api,{id:empid}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h1> Edit Employee data</h1>
        <div className="EditContainer">
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edit Employee Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.empno}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edit Employee Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edit Employee city</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.city}  />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edit Employee salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee Number" value={mydata.salary} />
                </Form.Group>


                </Form>
                </div>
        </>
    )
}
export default EditData;