import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
    
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((Values) => ({...Values,[name]: value, }));
        console.log(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const api = "http://localhost:8000/employees/employeesave";

        axios.post(api, input).then((res) => {
                console.log(res);
                toast.success("Data successfully saved!");
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
                toast.error("Failed to save data");
            });
    };

    return (
        <div className="container">
            <h1 className='insert'>Insert Employee Details</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmpNo">
                    <Form.Label>Employee No.</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Employee No."
                        name="empno" 
                        value={input.empno}
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={input.name}
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your City"
                        name="city"
                        value={input.city}
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Salary"
                        name="salary"
                        value={input.salary}
                        onChange={handleInput}
                    />
                </Form.Group>

                <button type="submit">Save Data</button> 
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Insert;
