import React from "react";
import { Divider, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router";
import { formatRating } from "../values";
import medal1 from "../assets/1.svg";
import medal2 from "../assets/2.svg";
import medal3 from "../assets/3.svg";
import medal4 from "../assets/4.svg";
import "./styles/Ranked.css";

const Ranked = ({ data }) => {
  const navigate = useNavigate();
  const medals = [medal1, medal2, medal3, medal4];

  return (
    <div className="most-reviewed pb-3">
      <Divider orientation="center" className="mb-0 mb-sm-3">
        <h2>Highly Appreciated</h2>
      </Divider>

      <div className="container-xxl">
        <div className="row m-0 px-0 justify-content-center">
          {data.map((faculty, index) => (
            <div
              key={faculty.id}
              className="col-6 col-md-4 col-xl-3 p-1 p-md-3"
              onClick={() => navigate(`/faculty/${faculty.id}`)}
      data-aos="fade-up"
            >
              <div className="top-review-container">
                <div className="card-container">
                  <div className="card">
                    <div className="image-container">
                      <img
                        src={faculty.image_url}
                        alt={faculty.name}
                        className="profile-img"
                      />
                    </div>
                    <div className="card-content">
                      <div className="header">
                        <div className="row text-start m-0 pt-3">
                          <div className="col-12 p-0">
                            {formatRating(faculty.overall_rating)}
                            <Rate
                              allowHalf
                              disabled
                              defaultValue={faculty.overall_rating}
                              className="ranked-card-rate ms-2"
                            />
                          </div>
                          <div className="col-12 review-content p-sm-0 p-0">
                            <span className="review-count m-0">
                              ({faculty.review_count} {faculty.review_count === 1 ? "review" : "reviews"})
                            </span>
                          </div>
                        </div>
                        <img
                          src={medals[index]} // Assign medal based on index
                          alt="Position Icon"
                          className="position-icon"
                        />
                      </div>
                      <Meta
                        title={faculty.name}
                        description={faculty.designation}
                        className="faculty-card-name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranked;
