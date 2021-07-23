import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import M from 'materialize-css';

const AddStudent = ()=>{
    const history = useHistory();
    const [registrationNo , setRegistrationNo] = useState('');

    const classData = JSON.parse(localStorage.getItem('classData'));

  // console.log(classData);


    const addStudent = ()=>{
        classData.map((item)=>{
            return(
                fetch('/student/addStudent',{
                    method:'put',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        Registration_No:registrationNo,
                        Class:item._id
                    })
                }).then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.error){
                        M.toast({html:data.message,classes:"#e53935 red darken-1"});
                    
          
                  }
                  else{
                      M.toast({html:data.message,classes:"#4caf50 green"});
                      history.push(`/class/${item._id}`);
                  }
              })
            )
        })
       }
    

    return(
        <div className="card input-field">
        <input type="text" placeholder="Registration No." value={registrationNo} onChange={(e)=>setRegistrationNo(e.target.value)}></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>addStudent()} >
        Add a Student
        </button>
        </div>
    )
    }

export default AddStudent;