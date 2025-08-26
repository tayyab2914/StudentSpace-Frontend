'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Navbar.css';
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import { API_SEARCH_FACULTY } from '@/apis';
import Image from 'next/image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Avatar, Divider, Popconfirm } from 'antd';
import { AntDesignOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthToken, setLoggedIn } from '@/redux/AuthToken/Action';
import { API_TEST_TOKEN } from '@/components/Account/Apis';

const MyNavbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(0);
  const { token, isLoggedIn } = useSelector((state: any) => state.authToken);
  const [showNav, setShowNav] = useState(false);

  const test_token = async() => {
    const response = await API_TEST_TOKEN(token, null)
    if(!response) {
      dispatch(setLoggedIn(false))
      dispatch(setAuthToken(null))
    }
  }

  useEffect(() => {
    test_token()
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFacultyClick = (faculty: any) => {
    router.push(`/faculty/${faculty.slug}`);
  };

  const handleDepartmentClick = (departmentName: string) => {
    router.push(`/department/${departmentName}`);
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
        <Navbar className="px-2 px-lg-5 my-navbar">
          <Container fluid>
            <Navbar.Brand onClick={() => router.push('/')}>
              <Image src="/logo.svg" alt="Logo" width={120} height={40} className="navbar-logo" />
            </Navbar.Brand>
            <div className={`${windowWidth > 550 && "ms-auto d-flex"} align-items-center`}>
              {windowWidth > 550 && (
                <Navbar.Collapse id="navbarScroll" className="ms-0 ms-lg-5">
                  <NAVBAR_COMPONENT />
                </Navbar.Collapse>
              )}
              {(typeof window !== 'undefined' && (window.location.pathname !== "/" && window.location.hash !== "#") || windowWidth > 550) ? (
                <SearchBar placeholder="Enter Instructor Name" apiCall={API_SEARCH_FACULTY} onResultClick={handleFacultyClick} style={{ marginLeft: '20px' }} isInNavbar={true} id={1} />
              ) : (
                <Image src="/hamburger_icon.svg" alt="Menu" width={25} height={25} onClick={() => setShowNav(true)} />
              )}
            </div>
          </Container>
          {isLoggedIn ? 
            windowWidth > 550 && <Popconfirm  placement="rightBottom" title="Logout" description="Are you sure you want to logout?" okText="Yes" cancelText="No" onConfirm={() => dispatch(setLoggedIn(false))}  >
              <i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize:"18px"}}></i>
            </Popconfirm>
            :
            <Avatar className='navbar-account-btn' icon={<Image src='https://cdn-icons-png.flaticon.com/512/2886/2886011.png' alt="Account" width={24} height={24} />}  onClick={() => router.push('/account')} />
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
                <div className='logout-btn'>  <Image src="/logout.svg" alt="Logout" width={18} height={18} style={{marginTop:"5px", marginRight:"10px"}} /> <span className='align-self-center'>Logout</span></div>
              </Popconfirm>}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="row m-0" style={{ height: "66px" }}></div>
    </>
  );
};

export default MyNavbar;