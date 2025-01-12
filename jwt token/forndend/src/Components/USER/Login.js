import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [state, setState] = useState("");
  let navigate =useNavigate()

    const Submitform =(e)=>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER}/api/login`,{state})
        .then((res)=>{
            console.log(res);  
          localStorage.setItem("token",res.data.token)
          if(localStorage.token){

              navigate("/homepage")
          }    
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }


  return (
    <div>
      <p>Login</p>
      <form onSubmit={Submitform}>
        <label>Contact Number</label>
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          />
          <input type="submit" value={"Submit"}/>
        
      </form>
    </div>
  );
};
