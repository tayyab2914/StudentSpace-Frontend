import React, { useEffect } from "react";
import styles from "./styles/InfoPages.module.css";
import { Breadcrumb } from "antd";
import MyNavbar from "../components/Generic/Navbar";

import Footer from "../components/Generic/Footer";
import { accent_color } from "../components/Generic/Colors";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <MyNavbar />
      <div className="row m-0 justify-content-center">
        <div className="col-12">
          <Breadcrumb
            className="ms-4 my-1 mt-3"
            items={[
              { title: <a onClick={() => navigate("/")}>Home</a> },
              { title: "Terms of Service" },
            ]}
          />
          <h2
            style={{
              color: accent_color,
              margin: "20px ",
              marginBottom: "5px",
            }}
          >
            Terms of Service
          </h2>
          <div className="row m-0  justify-content-center">
            <div className={`${styles.text} col-10`}>
              <section className="py-2">
                <h4>1. Acceptance of Terms</h4>
                <p>
                  By accessing or using Student Space ("the Service"), you agree
                  to be bound by these Terms of Service. If you do not agree
                  with any part of these terms, you must not use the Service.
                </p>
              </section>
              <section className="py-2">
                <h4>2. Modifications to Terms</h4>
                <p>
                  Student Space reserves the right to modify these Terms at any
                  time. Changes will be effective upon posting the updated Terms
                  on the website. Your continued use of the Service after any
                  modifications constitutes your acceptance of the new Terms.
                </p>
              </section>
              <section className="py-2">
                <h4>3. User Accounts</h4>
                <p>
                  <b>Eligibility:</b> You must be at least 13 years old to use
                  the Service. By creating an account, you represent that you
                  meet this requirement.
                </p>
                <p>
                  <b>Account Security:</b> You are responsible for maintaining
                  the confidentiality of your account information and for all
                  activities that occur under your account. You must notify us
                  immediately of any unauthorized use of your account.
                </p>
              </section>
              <section className="py-2">
                <h4>4. User Conduct</h4>
                <p>Users agree not to engage in any prohibited activities:</p>
                <ul>
                  <li>Submitting false or misleading information.</li>
                  <li>Posting defamatory or abusive reviews.</li>
                  <li>Using the Service for illegal purposes.</li>
                  <li>Attempting unauthorized access to any part of the Service.</li>
                </ul>
              </section>
              <section className="py-2">
                <h4>5. Content Ownership</h4>
                <p>
                  <b>User Content:</b> You retain ownership of content you
                  submit but grant Student Space a non-exclusive, royalty-free
                  license to use it.
                </p>
                <p>
                  <b>Service Content:</b> All other content is the property of
                  Student Space and is protected by intellectual property laws.
                </p>
              </section>
              <section className="py-2">
                <h4>6. Privacy Policy</h4>
                <p>
                  Your use of the Service is governed by our Privacy Policy,
                  which explains how we collect, use, and share your personal
                  information.
                </p>
              </section>
              <section className="py-2">
                <h4>7. Termination</h4>
                <p>
                  We reserve the right to suspend or terminate your account at
                  our sole discretion if you violate these Terms.
                </p>
              </section>
              <section className="py-2">
                <h4>8. Disclaimers</h4>
                <p>
                  The Service is provided "as-is" without warranties of any kind.
                </p>
              </section>
              <section className="py-2">
                <h4>9. Limitation of Liability</h4>
                <p>
                  Student Space is not liable for any indirect or consequential
                  damages arising from your use of the Service.
                </p>
              </section>
              <section className="py-2">
                <h4>10. Governing Law</h4>
                <p>
                  These Terms shall be governed by the laws of Pakistan.
                </p>
              </section>
              <section className="py-2">
                <h4>11. Contact Information</h4>
                <p>
                  If you have any questions about these Terms, please contact us
                  at studentspace.online@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
