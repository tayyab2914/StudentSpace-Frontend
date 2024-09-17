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
        setShowSpinner(true); 
        const response = await API_GET_POPULAR_FACULTIES();
        setPopularFacultyData(response); 
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch popular faculties:", error);
      } finally {
        setShowSpinner(false); 
      }
    };
    fetchPopularFaculties();
  }, []);  

  const groupArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr?.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  let groupedData 
  if(window.innerWidth>768 && window.innerWidth < 1200 )
  {
    groupedData = groupArray(popularFacultyData, 3);
  }
  else
  {
    
    groupedData = groupArray(popularFacultyData, 4);
  }

  return (
    <div>
      <Divider orientation="center"><h2 >Popular Personalities</h2></Divider>

      {showSpinner ? (
        <Spin />
      ) : (
        <Carousel>
          {groupedData.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row m-0 px-2 justify-content-center" >
                {group.map(faculty => (
                  <div key={faculty.id} className={`${window.innerWidth<500 ? 'col-10':'col-6'} col-md-4 col-xl-3 p-1 p-md-3`}>
                    <FacultyCard data={faculty} />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default PopularFaculty;
