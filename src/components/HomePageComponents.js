import React, { useState } from "react";
import { Parallax } from "react-parallax";
import SearchBar from "./SearchBar";
import { API_SEARCH_FACULTY } from "../apis";
import "./styles/HomePageComponents.css";
import { Card,Divider } from "antd";

// Image URLs
const LANDING_IMAGE_URL = "https://i.postimg.cc/T1xq94bL/Untitled-Project-2.webp";
const LANDING_IMAGE_URL_2 = "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726511323/OG_ftmsqn.png";

// LANDING_IMAGE_COMPONENT
export const LANDING_IMAGE_COMPONENT = ({ navigate }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <div>
      {!isImageLoaded && (
        <div className="row parallax-component" data-aos="fade-up">
          <div className="col-12 home-main-img align-self-end mb-5">
            <h2>
              Rate your Professors, <br />
              Share your Experience
            </h2>
            <SearchBar
              placeholder="Enter Faculty Name"
              apiCall={API_SEARCH_FACULTY}
              onResultClick={(faculty) =>
                navigate(`/faculty/${faculty.id}`, { state: { data: faculty } })
              }
              style={{ marginRight: "20px" }}
              id={2}
            />
          </div>
        </div>
      )}
      <Parallax
        blur={2}
        bgImage={LANDING_IMAGE_URL}
        strength={300}
        bgImageStyle={{ width: "100%", objectFit: "cover" }}
        onLoad={handleImageLoaded}
      >
        <div className="row parallax-component" data-aos="fade-up">
          <div className="col-12 home-main-img align-self-end mb-5">
            <h2>
              Rate your Professors, <br />
              Share your Experience
            </h2>
            <SearchBar
              placeholder="Enter Faculty Name"
              apiCall={API_SEARCH_FACULTY}
              onResultClick={(faculty) =>
                navigate(`/faculty/${faculty.id}`, { state: { data: faculty } })
              }
              style={{ marginRight: "20px" }}
              id={2}
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

// IMAGE_COMPONENT_2
export const IMAGE_COMPONENT_2 = ({ navigate }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="row m-0 mt-3">
      {!isImageLoaded && (
        <div className="row justify-content-end" style={{ height: `400px` }}>
          <div className="col-11 pe-5 col-lg-5 d-flex flex-column justify-content-center text-center parallax-component-2">
            <h2 className="text-white">Empowering Teachers Through Honest Feedback</h2>
            <p>
              Your reviews help educators grow and improve. By sharing your
              experiences, you contribute to a better learning environment for
              future students and help teachers refine their teaching approach.
            </p>
          </div>
        </div>
      )}
      <Parallax
        blur={2}
        bgImage={LANDING_IMAGE_URL_2}
        strength={300}
        bgImageStyle={{ width: "100%", objectFit: "cover" }}
        onLoad={handleImageLoaded}
      >
        <div className="row justify-content-end" style={{ height: `400px` }}>
          <div className=" col-11 pe-5 col-lg-5 d-flex flex-column justify-content-center text-center parallax-component-2">
            <span className=" parallax-2-text"><h2>Empowering Teachers Through Honest Feedback</h2>
            <p>
              Your reviews help educators grow and improve. By sharing your
              experiences, you contribute to a better learning environment for
              future students and help teachers refine their teaching approach.
            </p></span>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export const FACULTY_CARDS = ({ navigate }) => (
  <>
    <Divider orientation="center">
      <h2>Departments</h2>
    </Divider>

    <div className="container-xxl">
      <div className="row m-0 px-2">
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/foit")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685552/tech_company-amico_kq2tjk.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Information and Technology
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/foe")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685552/Printed_circuit_board-amico_tkssap.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">Faculty of Engineering</p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/fohs")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685551/Halloween_Instagram_feed-amico_jgomby.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Humanities and Social Sciences
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/foll")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685558/Translator-amico_qgfwz8.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Languages and Literature
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/fol")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685560/Universal_declaration_of_human_rights-amico_mhrvdo.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">Faculty of Law</p>

                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/fomm")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685551/Journalist-amico_aay5fw.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Media and Mass Communication
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/foms")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685552/Manage_money-amico_c7sa2a.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Management Sciences
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/fop")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685548/chemistry_lab-rafiki_g1vdme.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">Faculty of Pharmacy</p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div
          className="col-6 col-md-4 col-lg-3 p-1 p-md-3 p-xl-4"
          onClick={() => navigate("/department/fost")}
          data-aos="fade-up"
        >
          <Card
            hoverable
            cover={
              <img
                src={
                  "https://res.cloudinary.com/dmlxb4ea9/image/upload/v1726685551/Science-amico_cjucsg.svg"
                }
                className="faculty-image"
              />
            }
          >
            <div className="row m-0">
              <div
                className="col-12 p-0 d-flex flex-column"
                style={{ height: "120px" }}
              >
                <p className="department-card-name">
                  Faculty of Science and Technology
                </p>
                <button class="button text-center mt-auto w-100">
                  {" "}
                  <p class="text m-0">View Faculty</p>{" "}
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </>
);
