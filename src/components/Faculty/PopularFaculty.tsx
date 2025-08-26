'use client';

import React, { useEffect, useState } from "react";
import { Divider, Carousel as AntCarousel } from "antd";
import FacultyCard from "./FacultyCard";
import { API_GET_POPULAR_FACULTIES } from "@/apis";
import Shimmer from "../Generic/Shimmer";
import Ranked from "../Home/Ranked";

const PopularFaculty = () => {
  const [popularFacultyData, setPopularFacultyData] = useState([]);
  const [topRankedFaculty, setTopRankedFaculty] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const fetchPopularFaculties = async () => {
      try {
        setShowSpinner(true);
        const response = await API_GET_POPULAR_FACULTIES();
        let top4 = []
        if(typeof window !== 'undefined' && window.innerWidth > 768 && window.innerWidth < 1200)
        {
            top4 = response.slice(0, 3);
            setTopRankedFaculty(top4);
    
            // Set the remaining faculties for the carousel
            setPopularFacultyData(response.slice(3));
        }
        else
        {
            top4 = response.slice(0, 4);
            setTopRankedFaculty(top4);
    
            // Set the remaining faculties for the carousel
            setPopularFacultyData(response.slice(4));
        }
      } catch (error) {
        console.error("Failed to fetch popular faculties:", error);
      } finally {
        setShowSpinner(false);
      }
    };
    fetchPopularFaculties();
  }, []);

  const groupArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr?.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  let groupedData;
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) {
      groupedData = groupArray(popularFacultyData, 2);
    } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
      groupedData = groupArray(popularFacultyData, 3);
    } else {
      groupedData = groupArray(popularFacultyData, 4);
    }
  } else {
    groupedData = groupArray(popularFacultyData, 4);
  }

  return (
    <>
      {!showSpinner && <Ranked data={topRankedFaculty} />}
      <div>
        <Divider orientation="center">
          <h2>Popular Faculty</h2>
        </Divider>

        {showSpinner ? (
          <div className="container-xxl">
            <div className="row m-0">
              {[...Array(groupedData[0]?.length || 4)].map((_, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-xxl-3 p-1 p-md-3 p-xxl-3"
                >
                  <Shimmer />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AntCarousel dots={true} pauseOnHover={true} arrows={true} autoplay>
            {groupedData.map((group, index) => (
              <div key={index}>
                <div className="container-xxl">
                  <div className="row m-0 justify-content-center">
                    {group.map((faculty: any) => (
                      <div
                        key={faculty.slug}
                        className="col-6 col-md-4 col-xl-3 p-1 p-md-3"
                      >
                        <FacultyCard data={faculty} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AntCarousel>
        )}
      </div>
    </>
  );
};

export default PopularFaculty;