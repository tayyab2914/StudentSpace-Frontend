import React, { useEffect } from 'react'
// import { PRIVACY_POLICY_TEXT } from "../values/Text";
import styles from "./styles/InfoPages.module.css";
import { Helmet } from "react-helmet";
import MyNavbar from '../components/Navbar';
import { Divider, Spin } from "antd";
import { ABOUT_TEXT } from '../components/Text';

const PrivacyPolicy = () => {
    return (
      <div>
        <MyNavbar />
        <Helmet>
          <title>About Us | Student Space</title>
        </Helmet>
        <div className="row m-0 justify-content-center">
          <div className="col-12">
          <Divider orientation="left"  ><h2 className={styles.heading}>About Us</h2></Divider>
            <div className="row m-0  justify-content-center">
            <div
              className={`${styles.text} col-10`}
              dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
            ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PrivacyPolicy;
