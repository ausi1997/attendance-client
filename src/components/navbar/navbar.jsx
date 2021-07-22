import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Home from '../home/home';

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
  <Router>
    <Link to='/'><Navbar.Brand href="#home">AMS</Navbar.Brand> </Link>

    <Route exact path='/' component={Home}></Route>
    </Router>
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
                <NavDropdown.Item>{'Class:' +item.Standard}</NavDropdown.Item>
                )
            })
        }
          <NavDropdown.Divider />
          <Router>
    <NavDropdown.Item> <Link to= '/createClass'>Create Class +</Link></NavDropdown.Item>
          </Router>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
