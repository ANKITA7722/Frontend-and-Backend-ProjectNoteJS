import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TotalSalary = () => {
    const [employees, setEmployees] = useState([]); 
    const [totalSalary, setTotalSalary] = useState(0); 
    
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const api = "http://localhost:8080/employees/totalsalary"; 
                const response = await axios.get(api);

               
                if (response.data) {
                    const { employees, totalSalary } = response.data;

                    setEmployees(employees || []); 
                    setTotalSalary(totalSalary || 0);
                } else {
                    toast.error("Invalid response from the server");
                }
            } catch (error) {
                console.error("Error fetching employee data:", error);
                toast.error("Failed to fetch employee data");
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="container">
            <center>
                <h1 className="total-salary">Total Salary</h1>
            </center>
            <h2>Total Salary: {totalSalary}</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee No.</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((e) => (
                            <tr key={e.empno}>
                                <td>{e.empno}</td>
                                <td>{e.name}</td>
                                <td>{e.city}</td>
                                <td>{e.designation}</td>
                                <td>{e.salary}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No employee data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default TotalSalary;
