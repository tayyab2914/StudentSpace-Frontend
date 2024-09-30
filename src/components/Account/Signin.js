// Signin Component
import React, { useState } from "react";
import { Row, Col } from "antd";
import accountImage from "../../assets/Account_logo.svg";
import SigninForm from "./SigninForm";
import ForgotPassword from "./ForgotPassword";
import { API_SIGN_IN } from "./Apis";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import GoogleLoginBtn from "./GoogleLoginBtn";

const Signin = ({ toggleCurrentMode }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [ShowForgotPassword, setShowForgotPassword] = useState(false);
  const [ShowSpinner, setShowSpinner] = useState(false);

  const handleSignIn = async (email, password) => {
    const response = await API_SIGN_IN(email, password,dispatch,navigate,setShowSpinner);
  };

  return (
    <div>
      <Row gutter={24}>
        <Col xs={24} md={12} className="form-container">
          {!ShowForgotPassword ? (
            <SigninForm
              handleSignIn={handleSignIn}
              handleForgotPassword={() => setShowForgotPassword("true")}
              handleSignUpToggle={() => toggleCurrentMode("signup")}
            />
          ) : (
            <ForgotPassword setShowForgotPassword={setShowForgotPassword}/>
          )}
        </Col>
        <Col span={12} className="logo-container">
          <img src={accountImage} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
