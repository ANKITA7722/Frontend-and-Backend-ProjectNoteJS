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
      <Table striped bordered hover size="sm">
        <tr>
          <th>Employee no</th>
          <th>Name</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
        {ans}
      </Table>
    </>
  );
};

export default Display;
