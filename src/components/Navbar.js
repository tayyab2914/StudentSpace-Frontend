import React from 'react';
import { useState,useEffect } from 'react';
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
import Offcanvas from 'react-bootstrap/Offcanvas'; 

const MyNavbar = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [show_searchbar_onclick_of_icon, setshow_searchbar_onclick_of_icon] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFacultyClick = (faculty) => {
    navigate(`/faculty/${faculty.id}`, { state: { data: faculty } });
  };

  const handleDepartmentClick = (departmentName) => {
    navigate(`/department/${departmentName}`);
  };


const NAVBAR_COMPONENT = ()=>(
<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '600px' }} navbarScroll>
              <NavDropdown title="Faculties" id="navbarScrollingDropdown">
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
)

  return (
    <div className=' sticky-navbar'>
      <Navbar className="bg-body-tertiary px-2 px-lg-5">
  <Container fluid>
    <Navbar.Brand onClick={()=>navigate('/')}>
      <img src={logo} alt="" className="navbar-logo" />
    </Navbar.Brand>
    <div className="ms-auto d-flex align-items-center">
    <Navbar.Collapse id="navbarScroll" className="ms-0 ms-lg-5">
     { windowWidth > 550 && <NAVBAR_COMPONENT/>}
     </Navbar.Collapse>
     {!show_searchbar_onclick_of_icon && windowWidth < 550 && <button onClick={()=>setShowNav(true)} className='faculties-btn-navbar'>Faculties<i className="fa-solid fa-chevron-down"></i></button>}
      {windowWidth > 550 && <SearchBar placeholder="Enter Faculty Name" apiCall={API_SEARCH_FACULTY} onResultClick={handleFacultyClick} style={{ marginLeft: '20px' }} isInNavbar={true} />}
      {windowWidth < 550 && !show_searchbar_onclick_of_icon && <i className="fa-solid fa-magnifying-glass" style={{color:"#9500ff"}} onClick={()=>setshow_searchbar_onclick_of_icon(!show_searchbar_onclick_of_icon)}/>}
      {windowWidth < 550 && show_searchbar_onclick_of_icon && <><SearchBar placeholder="Enter Faculty Name" apiCall={API_SEARCH_FACULTY} onResultClick={handleFacultyClick} style={{ marginLeft: '20px' }} isInNavbar={true} /> <i className="fa-solid fa-xmark ms-3" style={{color:"#9500ff"}} onClick={()=>setshow_searchbar_onclick_of_icon(false)}></i></>}

    </div>
  </Container>
</Navbar>
<Offcanvas show={showNav} onHide={() => setShowNav(false)} placement="end">
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Faculties</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <ul className="list-unstyled">
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("foit")}>Faculty of Information and Technology</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("foe")}>Faculty of Engineering</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("fohs")}>Faculty of Humanities and Social Sciences</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("foll")}>Faculty of Languages and Literature</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("fol")}>Faculty of Law</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("foms")}>Faculty of Management Sciences</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("fomm")}>Faculty of Media and Mass Communication</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("fop")}>Faculty of Pharmacy</Button></li>
                          <li><Button className='offcanvas-data' onClick={() => handleDepartmentClick("fost")}>Faculty of Science and Technology</Button></li>
                        </ul>
                      </Offcanvas.Body>
                    </Offcanvas>
    </div>
  );
};

export default MyNavbar;
