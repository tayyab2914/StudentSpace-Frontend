import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import accountImage from '../../assets/Account_logo.svg';
import { API_SEND_VERIFICATION_EMAIL, API_SIGN_UP } from "./Apis";
import SignUpForm from './SignUpForm';
import AuthenticateVerification from './AuthenticateVerification';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from "../../redux/AuthToken/Action";


const SignUp = ({ toggleCurrentMode }) => {
  const dispatch = useDispatch()
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [VerificationCode, setVerificationCode] = useState('');
  const [CodeToken, setCodeToken] = useState('');
  const [showVerificationComponent, setShowVerificationComponent] = useState(false);
  const [ShowSpinner, setShowSpinner] = useState(false);
  const { token, isLoggedIn } = useSelector((state) => state.authToken);

  console.log(token,isLoggedIn)
  
  const handleSignUp = async (email, password) => {
    setEmail(email);
    setPassword(password);
    const response = await API_SEND_VERIFICATION_EMAIL(email,null,setShowSpinner);
    setCodeToken(response)
    setShowVerificationComponent(true);
  };

  const handleVerification = (code) => {
    setVerificationCode(code);
    API_SIGN_UP(Email,Password,code,CodeToken,dispatch,setShowSpinner)
  };

  const handleSignInToggle = () => {
    toggleCurrentMode("signin");
  };

  return (
    <div>
      {ShowSpinner && <Spin fullscreen/>}
      <Row gutter={24}>
        <Col xs={24} md={12} className="form-container">
          {!showVerificationComponent ? (
            <SignUpForm handleSignUp={handleSignUp} handleSignInToggle={handleSignInToggle} />
          ) : (
            <AuthenticateVerification handleVerification={handleVerification} />
          )}
        </Col>
        <Col span={12} className="logo-container">
          <img src={accountImage} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
