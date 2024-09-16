import React from "react";
import Navbar from "../components/Navbar";
import MyNavbar from "../components/Navbar";
import {
  FACULTY_CARDS,
  LANDING_IMAGE_COMPONENT,
} from "../components/HomePageComponents";
import PopularFaculty from "../components/PopularFaculty";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Student Space | Provide Feedback</title>

        {/* SEO Meta Tags */}
        <meta name="description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta name="keywords" content="UCP, student reviews, teacher feedback, academic reviews, educational platform, university reviews, ucp, review" />
        <meta name="author" content="Your Name or Your Organization" />
        
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UCP Faculty Reviews - Share Your Feedback" />
        <meta property="og:description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta property="og:image" content="%PUBLIC_URL%/src/assets/favicon/android-chrome-512x512.png" />
        <meta property="og:url" content="https://www.yourwebsite.com" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UCP Faculty Reviews - Share Your Feedback" />
        <meta name="twitter:description" content="A platform for UCP students to provide reviews and feedback on their teachers. Enhance teaching quality with real student insights." />
        <meta name="twitter:image" content="%PUBLIC_URL%/src/assets/favicon/android-chrome-512x512.png" />
      </Helmet>

      <MyNavbar />
      <LANDING_IMAGE_COMPONENT />
      <PopularFaculty />

      <FACULTY_CARDS navigate={navigate} />
    </div>
  );
};

export default Home;
