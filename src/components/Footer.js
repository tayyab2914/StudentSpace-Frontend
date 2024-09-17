import React from 'react';
import './styles/Footer.css'; // Import the CSS file
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => () => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address text-center align-self-center">
              <img src={logo} alt="" style={{width:"80%"}}  className='align-self-center'/>
            </div>

            {/* <div className="social_profile">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="single_footer single_footer_address">
              <h4>Pages</h4>
              <ul>
                <li><a onClick={()=>navigate('/')}>Home</a></li>
                <li><a onClick={()=>navigate('/about')}>About</a></li>
                <li><a onClick={()=>navigate('/privacy-policy')}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Departments</h4>
              <ul>
                          <li><a  onClick={() => navigate("/department/foit")}>Faculty of Information and Technology</a></li>
                          <li><a  onClick={() => navigate("/department/foe")}>Faculty of Engineering</a></li>
                          <li><a  onClick={() => navigate("/department/fohs")}>Faculty of Humanities and Social Sciences</a></li>
                          <li><a  onClick={() => navigate("/department/foll")}>Faculty of Languages and Literature</a></li>
                          <li><a  onClick={() => navigate("/department/fol")}>Faculty of Law</a></li>
                          <li><a  onClick={() => navigate("/department/foms")}>Faculty of Management Sciences</a></li>
                          <li><a  onClick={() => navigate("/department/fomm")}>Faculty of Media and Mass Communication</a></li>
                          <li><a  onClick={() => navigate("/department/fop")}>Faculty of Pharmacy</a></li>
                          <li><a  onClick={() => navigate("/department/fost")}>Faculty of Science and Technology</a></li>
                        </ul>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">
              Copyright © 2024 <a href="#">Student Space</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
