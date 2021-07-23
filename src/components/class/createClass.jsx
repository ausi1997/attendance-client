import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import M from 'materialize-css';

const CreateClass = ()=>{
    const history = useHistory();
    const [Standard,setStandard] = useState('');
    const [ClassTeacher,setClassTeacher]  = useState('');

    const ClassCreate = ()=>{
        fetch('/class/create',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Standard,
                ClassTeacher
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html:data.message,classes:"#e53935 red darken-1"});
                history.push('/createClass');
  
          }
          else{
              M.toast({html:data.message,classes:"#4caf50 green"});
              history.push('/');
          }
      })}
    

    return(
        <div className="card input-field">
        <input type="text" placeholder="Standard" value={Standard} onChange={(e)=>setStandard(e.target.value)}></input>
        <input type="text" placeholder="ClassTeacher" value={ClassTeacher} onChange={(e)=>setClassTeacher(e.target.value)}></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>ClassCreate()}>
        Create Class
        </button>
        </div>
    )
    }

export default CreateClass;