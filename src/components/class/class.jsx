import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import AddStudent from './addstudent';
const Class = ()=>{
 
    const {classid} = useParams();
    const [classinfo ,setClassinfo] = useState([]);
    const [studentinfo , setStudentinfo] = useState([]);

    useEffect(()=>{
        fetch(`/class/view/${classid}`)
        .then(res=>
            res.json()
        ).then(data=>{
            setClassinfo(data.result);
       localStorage.setItem("classData",JSON.stringify(data.result));
        }).catch(err=>{
            console.log(err);
        })
    },[classinfo]);

   console.log(classinfo);

    const viewStudent = ()=>{
             classinfo && classinfo.map((item)=>{
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
    }
    return(
        <div>
        {
           classinfo &&  classinfo.map((item)=>{
                return(
                    <div>
                    <div style={{display:'flex'}}>
                    <h3>Class:{item && item.Standard} Dashboard</h3>
                    <h6 style={{marginLeft:'650px', marginTop:'10px'}}>ClassTeacher:{item && item.ClassTeacher}</h6>
                    </div>
                    </div>
                    
                )
            })
        
        }
        <div style={{marginTop:'30px', marginLeft:'50px'}}>
        <DropdownButton
        onClick={()=>viewStudent()}
       variant='secondary'
        title="All Students"
        id="dropdown-menu-align-right"
      >  {
          studentinfo && studentinfo.map((item)=>{
              return(
                <Dropdown.Item >{item.Name}</Dropdown.Item>
              )
          })
      }
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4"><Link to="/addstudent">Add Student +</Link></Dropdown.Item>

      </DropdownButton>
      </div>
        </div>
    )
}

export default Class;