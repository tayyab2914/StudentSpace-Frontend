import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../components/Generic/Navbar";
import { API_GET_FACULTIES_BY_DEPARTMENT } from "../apis";
import { Divider, Spin, Row, Col, Breadcrumb } from "antd";
import FacultyCard from "../components/Faculty/FacultyCard";
import { getFacultyName } from "../values";
import { accent_color } from "../components/Generic/Colors";
import Shimmer from "../components/Generic/Shimmer";
import { useNavigate } from "react-router-dom";
import image404 from '../assets/404.svg'
import Footer from "../components/Generic/Footer";

const Department = () => {
  const { department_name } = useParams();
  const navigate = useNavigate()
  const [Department, setDepartment] = useState("");
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [showError404, setshowError404] = useState(false);
  const [DepartmentData, setDepartmentData] = useState([]);

  const handleDepartmentChange = (Department) => {
    // console.log("Department selected:", Department);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const load_Department = async (name) => {

    const response = await API_GET_FACULTIES_BY_DEPARTMENT(setShowSpinner, name,setshowError404);
    setDepartmentData(response);

  };
  useEffect(() => {
    setDepartment(department_name);
    handleDepartmentChange(department_name);
    load_Department(department_name);
  }, [department_name]);

  return (
    <>
      {/* {ShowSpinner && <Spin fullscreen className="spinner-overlay" />} */}
      <MyNavbar />
      {/* <Divider orientation="left" plain> */}
      {showError404 ? <>
    
    <div className="row m-0 pt-5" style={{height:"400px"}}>
    <div className="col-12 text-center align-self-center">
        
  <img src={image404} alt="" style={{height:"300px",textAlign:"center"}}/>
    </div>
  </div>
  </>:<> <Breadcrumb 
       className="ms-4 my-1 mt-4"
       items={[
        { title: <a onClick={()=>navigate('/')}>Home</a> },
        { title: Department.toUpperCase() },
    ]} />
    <h2 style={{ color: accent_color, margin: "20px " ,marginBottom:"5px"}}>
      {getFacultyName(Department)}
    </h2>
      {/* </Divider> */}

      <div className="container-xxl">
        <div className="row m-0 Department-list justify-content-center">
          {!ShowSpinner ? (
            DepartmentData?.map((DepartmentMember) => (
              <div
                key={DepartmentMember.id}
                className="col-6 col-md-4 col-xxl-3 p-1 p-md-3 p-xxl-3"
              >
                <FacultyCard data={DepartmentMember} />
              </div>
            ))
          ) : (
            <>
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-xxl-3 p-1 p-md-3 p-xxl-3"
                >
                  <Shimmer />
                </div>
              ))}
            </>
          )}
        </div>
      </div></>}
      <Footer/>
    </>
  );
};


export default Department;