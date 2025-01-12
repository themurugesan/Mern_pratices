import axios from 'axios'
import React from 'react'

export const Homepage = () => {
    const Apicall = ()=>{
        axios.post(`${process.env.REACT_APP_SERVER}/api/senddata`,{"name":"kapil"},{
            headers:{
                Authorization:localStorage.token
            }
        })
        .then((res)=>{
            console.log(res);      
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>
        <p>Homepage</p>
        <button onClick={Apicall}>make api call</button>
    </div>
  )
}
