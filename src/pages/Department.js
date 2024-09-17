import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import { API_GET_FACULTIES_BY_DEPARTMENT } from "../apis";
import { Divider, Spin, Row, Col } from "antd";
import FacultyCard from "../components/FacultyCard";

const Department = () => {
  const { department_name } = useParams();
  const [Department, setDepartment] = useState("");
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [DepartmentData, setDepartmentData] = useState([]);

  const handleDepartmentChange = (Department) => {
    console.log("Department selected:", Department);
  };

  const load_Department = async (name) => {
    const response = await API_GET_FACULTIES_BY_DEPARTMENT(setShowSpinner, name);
    setDepartmentData(response);
    console.log(response)
  };

  useEffect(() => {
    setDepartment(department_name);
    handleDepartmentChange(department_name);
    load_Department(department_name);
  }, [department_name]);

  return (
    <>
      {ShowSpinner && <Spin fullscreen className="spinner-overlay" />}
      <MyNavbar />
      <Divider orientation="left" plain>
        <h2 style={{color:"#6e00b7"}}>{Department?.toUpperCase()}</h2>
      </Divider>

     <div className="container-xxl">
     <div className="row m-0 Department-list justify-content-center">
        {DepartmentData?.map((DepartmentMember) => (
          <div key={DepartmentMember.id} className="col-10 col-md-4 col-xxl-3 p-1 p-md-3 p-xxl-3">
            <FacultyCard data={DepartmentMember} />
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default Department;