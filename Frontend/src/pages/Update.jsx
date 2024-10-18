import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import Table from 'react-bootstrap/Table';

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/employees/employeedisplay";
        axios.get(api).then((res) => {
            setMydata(res.data);  // Set the response data to state
            console.log("Data loaded successfully");
        }).catch((err) => {
            console.error("Error loading data", err);
        });
    };

    useEffect(() => {
        loadData();
    }, []);  // Empty array as dependency to load data once on component mount

    const myrecDel = (id) => {
        let api = "http://localhost:8000/employees/employeedelete";  // Changed to employeedelete for deletion
        axios.post(api, { id: id }).then((res) => {
            alert("Data deleted successfully!");
            loadData();  // Reload data after deletion
        }).catch((err) => {
            console.error("Error deleting data", err);
        });
    };

    const myrecEdit = (id) => {
        navigate(`/editdata/${id}`);
    };

    const ans = mydata.map((key) => {
        return (
            <tr key={key._id}>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
                <td>
                    <a href="#" onClick={() => { myrecEdit(key._id) }}>
                        <img src={editimg} width="30" height="30" alt="Edit" />
                    </a>
                    <a href="#" onClick={() => { myrecDel(key._id) }}>
                        <img src={delimg} width="30" height="30" alt="Delete" />
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Update My Records</h1>
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
    );
};

export default Update;
