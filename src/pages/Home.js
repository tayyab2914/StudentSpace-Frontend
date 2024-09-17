import React from "react";
import Navbar from "../components/Navbar";
import MyNavbar from "../components/Navbar";
import {
  FACULTY_CARDS,
  LANDING_IMAGE_COMPONENT,
} from "../components/HomePageComponents";
import PopularFaculty from "../components/PopularFaculty";

import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MyNavbar />
      <LANDING_IMAGE_COMPONENT navigate={navigate}/>
      <PopularFaculty />

      <FACULTY_CARDS navigate={navigate} />
      <Footer/>
    </div>
  );
};

export default Home;
