import React from "react";
import MyNavbar from "../components/Generic/Navbar";
import {
  FACULTY_CARDS,
  IMAGE_COMPONENT_2,
  LANDING_IMAGE_COMPONENT,
} from "../components/Home/HomePageComponents";
import PopularFaculty from "../components/Faculty/PopularFaculty";
import { useNavigate } from "react-router";
import Footer from "../components/Generic/Footer";
 
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
    </div>
  );
};

export default Home;
