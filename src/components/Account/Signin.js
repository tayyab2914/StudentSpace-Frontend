// Signin Component
import React, { useState } from "react";
import { Row, Col } from "antd";
import accountImage from "../../assets/Account_logo.svg";
import SigninForm from "./SigninForm";
import ForgotPassword from "./ForgotPassword";
import { API_SIGN_IN } from "./Apis";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useLocation } from "react-router";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { DOMAIN_NAME } from "../../values";

const Signin = ({ toggleCurrentMode }) => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [ShowForgotPassword, setShowForgotPassword] = useState(false);
  const [ShowSpinner, setShowSpinner] = useState(false);

  

  const handleSignIn = async (email, password) => {
    const response = await API_SIGN_IN(email, password,dispatch,navigate,setShowSpinner);
    if(response){
        const searchParams = new URLSearchParams(location.search);
        const next = searchParams.get('next'); 
        const leniency = searchParams.get('leniency');
        const subjectKnowledge = searchParams.get('subjectKnowledge');
        const gradingFairness = searchParams.get('gradingFairness');
        const reviewText = searchParams.get('reviewText');
        
        //!if the user has next and liniency then it means he has to submit review 
        if (next && leniency) {
            navigate(`${next}?leniency=${leniency}&subjectKnowledge=${subjectKnowledge}&gradingFairness=${gradingFairness}&reviewText=${reviewText}`);
        } else if (next)
        {
                navigate(next)
        }
            else {
            navigate('/');
        }
    }
  };

  return (
    <div data-aos="fade-up">
      <Row gutter={24}>
        <Col xs={24} md={12} className="form-container" data-aos="fade-right">
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
        <Col span={12} className="logo-container" data-aos="fade-left">
          <img src={accountImage} alt="Account Logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
