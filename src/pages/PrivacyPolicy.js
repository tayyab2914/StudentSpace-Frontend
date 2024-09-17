import React, { useEffect } from 'react'
// import { PRIVACY_POLICY_TEXT } from "../values/Text";
import styles from "./styles/InfoPages.module.css";
import { Helmet } from "react-helmet";
import MyNavbar from '../components/Navbar';
import { Divider, Spin } from "antd";
import { PRIVACY_POLICY_TEXT } from '../components/Text';

const PrivacyPolicy = () => {
    return (
      <div>
        <MyNavbar />
        <Helmet>
          <title>Privacy Policy | Student Space</title>
        </Helmet>
        <div className="row m-0 justify-content-center">
          <div className="col-12">
          <Divider orientation="left"  ><h2 className={styles.heading}>Privacy Policy</h2></Divider>
            <div className="row m-0  justify-content-center">
            <div
              className={`${styles.text} col-10`}
              dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_TEXT }}
            ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PrivacyPolicy;
