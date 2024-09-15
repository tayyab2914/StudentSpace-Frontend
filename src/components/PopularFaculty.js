import React, { useEffect, useState } from 'react';
import { Divider, Spin } from "antd";
import Carousel from 'react-bootstrap/Carousel';
import FacultyCard from './FacultyCard';
import { API_GET_POPULAR_FACULTIES } from '../apis';

const PopularFaculty = () => {
  const [popularFacultyData, setPopularFacultyData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const fetchPopularFaculties = async () => {
      try {
        setShowSpinner(true);  // Show spinner while data is loading
        const response = await API_GET_POPULAR_FACULTIES();
        setPopularFacultyData(response);  // Assuming the API returns a data object
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch popular faculties:", error);
      } finally {
        setShowSpinner(false);  // Hide spinner after loading
      }
    };
    fetchPopularFaculties();
  }, []);  // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <Divider orientation="left">Popular Faculties</Divider>

      {/* Show spinner while data is loading */}
      {showSpinner ? (
        <Spin />
      ) : (
        <Carousel>
          {/* Iterate over popular faculty data */}
          <div className="row"></div>
          {popularFacultyData?.map((faculty, index) => (
            <div key={faculty.id} className="col-10 col-md-4 col-xxl-3 p-1 p-md-3 p-xxl-5">
              <FacultyCard data={faculty} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default PopularFaculty;
