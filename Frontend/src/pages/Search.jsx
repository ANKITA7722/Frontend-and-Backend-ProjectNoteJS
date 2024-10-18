import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const Search = () => {
    const [empno, setEmpno] = useState("");
    const [mydata, setMydata] = useState([]);



    const handleSubmit = () => {
        let api = "http://localhost:8000/employees/employeesearch";
        axios.post(api, { empno: empno }).then((res) => {
            setMydata(res.data);

            if (res.data.length == 0) {
                alert("no record found");
            }
        })
    }
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.empno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.salary}</td>
                </tr>
            </>
        )
    })

    return (
        <>
            <h1>Search Employee Number</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Employee Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Employee Number" value={empno} onChange={(e) => { setEmpno(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>search</Button>
            </Form>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Emp No.</th>
                        <th>Name</th>
                        <th>city</th>
                        <th>Salary</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
            </Table>
        </>
    )
}
export default Search;