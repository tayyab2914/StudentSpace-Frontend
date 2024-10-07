import React, { useEffect, useState } from "react";
import "./styles/Account.css";
import MyNavbar from "../Generic/Navbar";
import Footer from "../Generic/Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import { Col, Row } from "antd";
import { useSelector,useDispatch} from 'react-redux';
import { useNavigate,useLocation } from "react-router";

const Account = () => {
  const [currentMode, setCurrentMode] = useState("signin");
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  const toggleCurrentMode = (mode) => {
    setCurrentMode(mode);
  };

  return (
    <>
      <MyNavbar />
      <Row gutter={24} align="middle" justify="center">
        <Col className="gutter-row account-main-row" span={24}>
          {currentMode === "signin" && ( <Signin toggleCurrentMode={toggleCurrentMode} /> )}
          {currentMode === "signup" && ( <Signup toggleCurrentMode={toggleCurrentMode} /> )}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Account;
