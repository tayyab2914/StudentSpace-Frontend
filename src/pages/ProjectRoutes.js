import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from './Home'; 
import Department from './Department';
import Instructor from './Instructor';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';
import NotFound from './NotFound';
import TermsOfService from './TermsOfService';
import Account from '../components/Account/Account';
import { useSelector,useDispatch} from 'react-redux';

const ProjectRoutes = () => {
    const { token, isLoggedIn } = useSelector((state) => state.authToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/department/:department_name" element={<Department />} />
        <Route path="/faculty/:instructor_id" element={<Instructor />} />
        <Route path="/account" element={isLoggedIn ? <Home/> : <Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
