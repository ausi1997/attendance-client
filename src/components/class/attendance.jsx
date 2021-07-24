import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Attendance = (props)=>{
    const history = useHistory();
    const [subject , setSubject] = useState('');
    const [teacher , setTeacher] = useState('');

    const classInfo = props.classinfo;

    const Submit = ()=>{
        classInfo.map((item)=>{
            return(
                fetch('/attendance/create',{
                    method:'post',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        Subject:subject,
                        Teacher:teacher,
                        Class:item._id
                    })
                }).then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("attendanceData", JSON.stringify(data));
                    if(data.error){
                        history.push(`/class/${item._id}`);
                  }
                  else{
                      history.push('/takeattendance');
                  }
              })
            )
        })
       }

    return(
        <div>
        <div className="card input-field">
        <h4>Fill this info. to take attendance</h4>
        <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
        <input type="text" placeholder="Teacher" value={teacher} onChange={(e)=>setTeacher(e.target.value)}></input>
        <button class="btn waves-effect waves-light #64b5f6 blue lighten-2" type="submit" name="action" onClick={()=>Submit()}>
        Submit
        </button>
        </div>
        </div>
    )
}

export default Attendance;