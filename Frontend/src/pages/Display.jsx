import { useState, useEffect } from "react";
import axios from "axios";

import Table from 'react-bootstrap/Table'

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8000/employees/employeedisplay";

    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response);
    } catch (error) {
      alert(error.response.data);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (

      <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
      </tr>

    );
  });

  return (
    <>
    <div className="dispContainer">
     <h1 style={{color:"green"}} align="center">Display Employee Data</h1>
      <Table striped bordered hover size="sm" border={2} style={{backgroundColor:"whitesmoke"}}>
        <tr border={2}>
          <th>Employee no</th>
          <th>Name</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
        {ans}
      </Table>
      </div>
    </>
  );
};

export default Display;
