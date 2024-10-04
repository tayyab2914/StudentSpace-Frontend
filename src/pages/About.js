import React, { useEffect } from "react";
// import { PRIVACY_POLICY_TEXT } from "../values/Text";
import styles from "./styles/InfoPages.module.css";
import { Breadcrumb, Divider, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { accent_color } from "../components/Generic/Colors";
import Footer from "../components/Generic/Footer";
import MyNavbar from "../components/Generic/Navbar";

const About = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo({ top: 0,behavior: 'smooth'});
},[])
  return (
    <div>
      <MyNavbar />
      <div className="row m-0 justify-content-center">
        <div className="col-12">
          <Breadcrumb className="ms-4 my-1 mt-3"
            items={[
              { title: <a onClick={() => navigate("/")}>Home</a> },
              { title: "About" },
            ]}
          />
          <h2 style={{ color: accent_color, margin: "20px ", marginBottom: "5px", }} >
            About Us
          </h2>
          <div className="row m-0  justify-content-center">
            <div className={`${styles.text} col-10`}>
              <section className="py-2">
                <h4>Our Mission</h4>
                <p>
                  At Student Space, our mission is to foster a respectful and
                  supportive academic environment by empowering students to
                  share their feedback about faculty members anonymously. We
                  strive to enhance the educational experience by ensuring that
                  every voice is heard while maintaining the integrity of the
                  review process.
                </p>
              </section>
              <section className="py-2">
                <h4>Why We Focus on Anonymity</h4>
                <p>
                  Anonymity is a cornerstone of our platform. To ensure that
                  students feel comfortable sharing honest and constructive
                  feedback, we assign random names to each student review. This
                  practice helps us create a secure environment where students
                  can freely express their opinions without fear of reprisal or
                  judgment.
                </p>
              </section>
              <section className="py-2">
                <h4>How We Handle Reviews</h4>
                <p>
                  All reviews submitted by students are reviewed by our admin
                  team within 24 hours. This process ensures that any
                  inappropriate or harmful comments are promptly removed,
                  maintaining a respectful space for everyone. Additionally,
                  reviews can be deleted upon request from the university,
                  ensuring that our platform adheres to institutional guidelines
                  and policies.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
