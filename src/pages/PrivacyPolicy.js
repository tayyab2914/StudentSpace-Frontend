import React, { useEffect } from "react";
// import { PRIVACY_POLICY_TEXT } from "../values/Text";
import styles from "./styles/InfoPages.module.css";
import MyNavbar from "../components/Navbar";
import { Divider, Spin } from "antd";
import { PRIVACY_POLICY_TEXT } from "../components/Text";

const PrivacyPolicy = () => {
  return (
    <div>
      <MyNavbar />
      <div className="row m-0 justify-content-center">
        <div className="col-12">
          <Divider orientation="left">
            <h2 className={styles.heading}>Privacy Policy</h2>
          </Divider>
          <div className="row m-0  justify-content-center">
            <div className={`${styles.text} col-10`}>
              <section>
                <h4>Introduction</h4>
                <p>
                  Welcome to Student Space. We are committed to protecting your
                  privacy and ensuring that your personal information is handled
                  in a safe and responsible manner. This Privacy Policy outlines
                  how we collect, use, and protect your information.
                </p>
              </section>
              <section>
                <h4>Anonymous Reviews</h4>
                <p>
                  To ensure complete anonymity, Student Space assigns random
                  names to each student review. This practice allows students to
                  provide feedback on faculty members without revealing their
                  identities. We believe that this approach promotes honesty and
                  transparency in the review process.
                </p>
              </section>
              <section>
                <h4>Data Collection and Use</h4>
                <p>
                  We collect and use data from reviews to maintain and improve
                  our platform. The information collected is used solely for the
                  purpose of providing feedback on faculty members and ensuring
                  a respectful environment. We do not share or disclose any
                  personal information about students.
                </p>
              </section>
              <section>
                <h4>Review Moderation</h4>
                <p>
                  All reviews are moderated by our admin team within 24 hours of
                  submission. This process is designed to filter out any
                  inappropriate or harmful comments and ensure that the feedback
                  provided is constructive and respectful. Reviews may also be
                  deleted if required by the university.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
