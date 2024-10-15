import axios from "axios";

import { useState } from "react";




const Search=()=>{
    const [empno ,setEmpno] = useState("");



    const handleSubmit =()=>{
        let api = "http://localhost:8000/employees/employeesearch";
        axios.post(api,{empno:empno}).then((res)=>{
            console.log(res);
        })
    }
    
return(
    <>
        <center>
            <h1 style={{color:"green"}}>Search Employee Number</h1>
            Enter Emp no. : <input type="text" value={empno} />
                <button onClick={handleSubmit}>Submit</button>
                {/* <hr size="5" color="green"/>
                {ans}
                <hr size="5" color="green"/> */}
                </center>
      
       
    </>
)
}
export default Search;