import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Navbar.css';
import { useNavigate } from 'react-router';
import { DOMAIN_NAME } from '../values';

const MyNavbar = () => {
    const navigate =useNavigate()
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search click
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Add your search functionality here
  };

  const handleDepartmentClick = (departmentName) => {
    navigate(`/department/${departmentName}`)
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary px-2 px-lg-5">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZmkEZl3rum3GQE4bU1lLrtkiOE5kGiF5og&s" alt="" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="ms-5">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '600px' }} navbarScroll>
              <NavDropdown title="Faculties" id="navbarScrollingDropdown">
                {/* Change names from here */}
                <NavDropdown.Item onClick={() => handleDepartmentClick("foe")}>foe</NavDropdown.Item>  
                <NavDropdown.Item onClick={() => handleDepartmentClick("fohs")}>fohs</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foit")}>foit</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foll")}>foll</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fol")}>fol</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foms")}>foms</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fomm")}>fomm</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fop")}>fop</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fost")}>fost</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
