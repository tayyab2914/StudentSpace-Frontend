import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Navbar.css';
import { useNavigate } from 'react-router';
import SearchBar from './SearchBar';
import { API_SEARCH_FACULTY } from '../apis'; 
import logo from '../assets/logo.svg';

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleFacultyClick = (faculty) => {
    navigate(`/faculty/${faculty.id}`, { state: { data: faculty } });
  };

  const handleDepartmentClick = (departmentName) => {
    navigate(`/department/${departmentName}`);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary px-2 px-lg-5">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="ms-0 ms-lg-5">
            
          <Nav.Link className='pt-2 pt-lg-0' onClick={()=>navigate('/about')} > About Us </Nav.Link>
          <Nav.Link className='pt-2 pt-lg-0' onClick={()=>navigate('/privacy-policy')} > Privacy Policy </Nav.Link>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '600px' }} navbarScroll>
              <NavDropdown title="Faculties" id="navbarScrollingDropdown" className='nav-option'>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foit")}>Faculty of Information and Technology</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foe")}>Faculty of Engineering</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fohs")}>Faculty of Humanities and Social Sciences</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foll")}>Faculty of Languages and Literature</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fol")}>Faculty of Law</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("foms")}>Faculty of Management Sciences</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fomm")}>Faculty of Media and Mass Communication</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fop")}>Faculty of Pharmacy</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleDepartmentClick("fost")}>Faculty of Science and Technology</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <SearchBar
              placeholder="Enter Faculty Name"
              apiCall={API_SEARCH_FACULTY}
              onResultClick={handleFacultyClick}
              style={{ marginRight: '20px' }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
