import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Home'; 
import Department from './Department';
import Instructor from './Instructor';

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department/:department_name" element={<Department />} />
        <Route path="/faculty/:instructor_id" element={<Instructor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
