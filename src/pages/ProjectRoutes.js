import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Home'; 
import Department from './Department';
import Instructor from './Instructor';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/department/:department_name" element={<Department />} />
        <Route path="/faculty/:instructor_id" element={<Instructor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
