'use client';

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import MyNavbar from "@/components/Generic/Navbar";
import { API_GET_FACULTIES_BY_DEPARTMENT } from "@/apis";
import { Breadcrumb } from "antd";
import FacultyCard from "@/components/Faculty/FacultyCard";
import { getFacultyName } from "@/values";
import { accent_color } from "@/components/Generic/Colors";
import Shimmer from "@/components/Generic/Shimmer";
import Image from "next/image";
import Footer from "@/components/Generic/Footer";

export default function Department() {
  const params = useParams();
  const router = useRouter();
  const department_name = params.department_name as string;
  
  const [Department, setDepartment] = useState("");
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [showError404, setshowError404] = useState(false);
  const [DepartmentData, setDepartmentData] = useState([]);

  const handleDepartmentChange = (Department: string) => {
    // console.log("Department selected:", Department);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const load_Department = async (name: string) => {
    const response = await API_GET_FACULTIES_BY_DEPARTMENT(setShowSpinner, name, setshowError404);
    setDepartmentData(response);
  };

  useEffect(() => {
    setDepartment(department_name);
    handleDepartmentChange(department_name);
    load_Department(department_name);
  }, [department_name]);

  return (
    <>
      <MyNavbar />
      {showError404 ? (
        <div className="row m-0 pt-5" style={{height:"400px"}}>
          <div className="col-12 text-center align-self-center">
            <Image src="/404.svg" alt="404" width={300} height={300} style={{textAlign:"center"}}/>
          </div>
        </div>
      ) : (
        <>
          <Breadcrumb 
            className="ms-4 my-1 mt-4"
            items={[
              { title: <a onClick={() => router.push('/')}>Home</a> },
              { title: Department.toUpperCase() },
            ]} 
          />
          <h2 style={{ color: accent_color, margin: "20px ", marginBottom:"5px"}}>
            {getFacultyName(Department)}
          </h2>

          <div className="container-xxl">
            <div className="row m-0 Department-list justify-content-center">
              {!ShowSpinner ? (
                DepartmentData?.map((DepartmentMember: any) => (
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
          </div>
        </>
      )}
      <Footer/>
    </>
  );
}