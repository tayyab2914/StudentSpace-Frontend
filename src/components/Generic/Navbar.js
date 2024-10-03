import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router';
import SearchBar from './SearchBar';
import { API_SEARCH_FACULTY } from '../../apis';
import logo from '../../assets/logo.svg';
import hamburger_icon from '../../assets/hamburger_icon.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Avatar, Divider, Popconfirm } from 'antd';
import { AntDesignOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/AuthToken/Action';
import logout from '../../assets/logout.svg'

const MyNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
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

  const NAVBAR_COMPONENT = () => (
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
  );

  return (
    <>
      <div className='sticky-navbar'>
        {/* <div className="headline">
          CONTACT US: <a href="mailto:studentspace.online@gmail.com">STUDENTSPACE.ONLINE@GMAIL.COM</a>
        </div> */}
        <Navbar className="px-2 px-lg-5 my-navbar">
          <Container fluid>
            <Navbar.Brand onClick={() => navigate('/')}>
              <img src={logo} alt="" className="navbar-logo" />
            </Navbar.Brand>
            <div className={`${windowWidth > 550 && "ms-auto d-flex"} align-items-center`}>
              {windowWidth > 550 && (
                <Navbar.Collapse id="navbarScroll" className="ms-0 ms-lg-5">
                  <NAVBAR_COMPONENT />
                </Navbar.Collapse>
              )}
              {(window.location.pathname !== "/" && window.location.hash !== "#" || windowWidth > 550) ? (
                <SearchBar placeholder="Enter Instructor Name" apiCall={API_SEARCH_FACULTY} onResultClick={handleFacultyClick} style={{ marginLeft: '20px' }} isInNavbar={true} id={1} />
              ) : (
                <img src={hamburger_icon} style={{ height: "25px" }} onClick={() => setShowNav(true)} />
              )}
            </div>
          </Container>
         {isLoggedIn ? 
         
         windowWidth > 550 && <Popconfirm  placement="rightBottom" title="Logout" description="Are you sure you want to logout?" okText="Yes" cancelText="No" onConfirm={() => dispatch(setLoggedIn(false))}  >
            <img src={logout} style={{height:"22px"}}/> 
        </Popconfirm>
            :
          <Avatar className='navbar-account-btn' icon={<img src='https://cdn-icons-png.flaticon.com/512/2886/2886011.png'></img>}  onClick={() => navigate('/account')} />
          }
          
        </Navbar>
        <Offcanvas show={showNav} onHide={() => setShowNav(false)} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Faculties</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("foit")}>Faculty of Information and Technology</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("foe")}>Faculty of Engineering</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("fohs")}>Faculty of Humanities and Social Sciences</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("foll")}>Faculty of Languages and Literature</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("fol")}>Faculty of Law</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("foms")}>Faculty of Management Sciences</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("fomm")}>Faculty of Media and Mass Communication</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("fop")}>Faculty of Pharmacy</span></li><Divider className="my-2" />
              <li><span className='offcanvas-data' onClick={() => handleDepartmentClick("fost")}>Faculty of Science and Technology</span></li><Divider className="my-2" />
              {isLoggedIn && <Popconfirm  
          placement="topLeft" title="Logout" description="Are you sure you want to logout?" okText="Yes" cancelText="No" onConfirm={() => dispatch(setLoggedIn(false))}  >
            <div className='logout-btn'>  <img src={logout} style={{height:"18px",marginTop:"5px", marginRight:"10px"}} /> <span className='align-self-center'>Logout</span></div>
        </Popconfirm>}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="row m-0" style={{ height: "72px" }}></div>
    </>
  );
};

export default MyNavbar;
