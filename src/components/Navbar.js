import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Navbar.css';
import { useNavigate } from 'react-router';
import { Spin, List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { API_SEARCH_FACULTY } from '../apis';
import logo from '../assets/logo.svg'
const MyNavbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Handle search click
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setShowSpinner(true);
    try {
      const response = await API_SEARCH_FACULTY(setShowSpinner, searchQuery);
      setSearchResults(response);  // Assuming API returns a list of faculty
    } catch (error) {
      console.error("Search failed:", error);
    }
    setShowSpinner(false);
  };

  const handleDepartmentClick = (departmentName) => {
    navigate(`/department/${departmentName}`);
  };

  const handleFacultyClick = (faculty) => {
    navigate(`/faculty/${faculty.id}`, { state: { data: faculty } });
    setSearchQuery('');  // Clear search after selection
    setSearchResults([]); // Clear search results
  };

  return (
    <div>
      {showSpinner && <Spin fullscreen className="spinner-overlay" />}
      <Navbar expand="lg" className="bg-body-tertiary px-2 px-lg-5">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="ms-5">
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
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex position-relative" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Results Section Below Navbar */}
      {searchResults?.length > 0 && (
        <div className="search-results-overlay">
          <Container fluid className="mt-3">
            <h5>Search Results:</h5>
            <List
              dataSource={searchResults}
              renderItem={faculty => (
                <List.Item
                  key={faculty.id}
                  onClick={() => handleFacultyClick(faculty)}
                  className="search-item"
                >
                  <List.Item.Meta
                    avatar={<Avatar src={faculty.image_url || <UserOutlined />} />}
                    title={faculty.name}
                    description={`${faculty.review_count} reviews`}
                  />
                </List.Item>
              )}
            />
          </Container>
        </div>
      )}
    </div>
  );
};

export default MyNavbar;
