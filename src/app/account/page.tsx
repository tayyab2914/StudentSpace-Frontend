'use client';

import React, { useEffect, useState } from "react";
import "./Account.css";
import MyNavbar from "@/components/Generic/Navbar";
import Footer from "@/components/Generic/Footer";
import Signin from "@/components/Account/Signin";
import Signup from "@/components/Account/Signup";
import { Col, notification, Row } from "antd";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";

export default function Account() {
  const [currentMode, setCurrentMode] = useState("signin");
  const { token, isLoggedIn } = useSelector((state: any) => state.authToken);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }

    notification.info({
      message: <b>Privacy Notice</b>,
      description: 'Rest easy, your identity remains completely anonymous—your privacy is our priority! 😊',
      placement: 'topRight',
    });
  }, [isLoggedIn, router]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  const toggleCurrentMode = (mode: string) => {
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
}