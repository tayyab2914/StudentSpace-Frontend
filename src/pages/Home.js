import React from "react";
import MyNavbar from "../components/Navbar";
import {
  FACULTY_CARDS,
  IMAGE_COMPONENT_2,
  LANDING_IMAGE_COMPONENT,
} from "../components/HomePageComponents";
import PopularFaculty from "../components/PopularFaculty";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Description from "../components/Description"; // Import the updated Description component

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyNavbar />
      <LANDING_IMAGE_COMPONENT navigate={navigate} />
      <PopularFaculty />
      <IMAGE_COMPONENT_2 />
      <FACULTY_CARDS navigate={navigate} />
      <Footer />
      <Description /> 
    </div>
  );
};

export default Home;
