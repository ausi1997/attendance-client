import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router ,Link} from 'react-router-dom';

export default function NavBar() {

    const [classdata,setClass] = useState([]);

  useEffect(()=>{
      fetch('/class/viewAll')
      .then(res=>
          res.json()
      ).then(data=>{
          setClass(data.result);
      }).catch(err=>{
          console.log(err);
      })
  },[]);


  return (
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand><Link to="/">AMS</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
   
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="All Class"
          menuVariant="dark"
        >
        {
            classdata.map((item)=>{
                return(
                <NavDropdown.Item><Link style={{color:'black'}} to={`/class/${item._id}`} >{'Class:' +item.Standard}</Link></NavDropdown.Item>
                )
            })
        }
          <NavDropdown.Divider />
    <NavDropdown.Item> <Link style={{color:'black'}} to="/createClass">Create Class +</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
