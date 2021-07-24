import React, { useEffect, useState } from 'react';
import {InputGroup , Button , FormControl} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import M from 'materialize-css';

const TakeAttendance = ()=>{

    const history = useHistory();

    const [studentinfo , setStudentinfo] = useState([]);

    const classData = JSON.parse(localStorage.getItem('classData'));

    const attendanceData = JSON.parse(localStorage.getItem('attendanceData'));
   // console.log(props.attendance._id);
     //    console.log(attendanceData.result._id);
    useEffect(()=>{
        classData.map((item)=>{
            return(
                fetch(`/student/view/${item._id}`)
                .then(res=>res.json())
                .then(data=>{
                    setStudentinfo(data.result);
                }).catch(err=>{
                    console.log(err);
                })
            )
        })
    })
 
    const Present = (id)=>{
        fetch(`/attendance/present/${attendanceData.result._id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                _id:id
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html:data.message,classes:"#e53935 red darken-1"});
          }
          else{
              M.toast({html:data.message,classes:"#4caf50 green"});
          }
        }).catch(err=>{
            console.log(err);
        })
    }
   
    const Absent = (id)=>{
        fetch(`/attendance/absent/${attendanceData.result._id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                _id:id
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html:data.message,classes:"#e53935 red darken-1"});
          }
          else{
              M.toast({html:data.message,classes:"#4caf50 green"});
          }
        }).catch(err=>{
            console.log(err);
        })
    }

    const Submit = ()=>{
        localStorage.clear();
        history.push('/');
    }
   

    return(
        <div>
        {
            studentinfo && studentinfo.map((item)=>{
                return(
                    <InputGroup>{item.Name}
                    <FormControl
                      aria-label="Recipient's username with two button addons"
                    />
                    <Button variant="outline-secondary" onClick={()=>Present(item._id)}>Present</Button>
                    <Button variant="outline-secondary" onClick={()=>Absent(item._id)}>Absent</Button>
                  </InputGroup>
                )
            })
        }
        <div>
        <Button variant="secondary" onClick={()=>Submit()}>Submit</Button>
        </div>
        
        </div>
    )
}

export default TakeAttendance;