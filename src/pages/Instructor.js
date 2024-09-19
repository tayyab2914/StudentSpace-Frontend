import React, { useEffect, useState } from "react";
import MyNavbar from "../components/Navbar";
import { useParams } from "react-router-dom"; // Import useParams
import { Rate, Spin, List, message, Tooltip, Breadcrumb } from "antd";
import { API_GET_FACULTY_REVIEWS } from "../apis";
import "./styles/Instructor.css";
import Review from "../components/Review";
import ReviewInput from "../components/ReviewInput";
import { formatRating, getFacultyNameByDepNo } from "../values";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Instructor = () => {
  const { instructor_id } = useParams(); // Extract instructor_id
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [facultyInfo, setFacultyInfo] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate()
const [isLinkCopied, setisLinkCopied] = useState(false);


useEffect(()=>{
    window.scrollTo({ top: 0,behavior: 'smooth'});
},[])
  const fetch_reviews = async () => {
    try {
      const response = await API_GET_FACULTY_REVIEWS(setShowSpinner, instructor_id); // Use instructor_id
      setReviews(response.reviews.reverse());
      setFacultyInfo(response.faculty);
      console.log('response.faculty',response.faculty)
    } catch (error) {
      console.error("Error fetching faculty reviews:", error);
    }
  };

  useEffect(() => {
    fetch_reviews();
  }, [instructor_id]); // Fetch data whenever the instructor_id changes

  // Handle scroll event
  useEffect(() => {
    const element = document.querySelector("#scroll-box");
    
    const handleScroll = () => {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // Add this useEffect for scroll event handling

  return (
    <div>a
      {ShowSpinner && <Spin fullscreen className="spinner-overlay" />}
      <MyNavbar />
      <Breadcrumb 
       className="ms-4 mb-1 mt-0"
       items={[
        { title: <a onClick={()=>navigate('/')}>Home</a> },
        { title: <a onClick={()=>navigate(`/department/${getFacultyNameByDepNo(facultyInfo?.department)}`)}>{getFacultyNameByDepNo(facultyInfo?.department).toUpperCase()}</a>
         },
        { title: facultyInfo?.name },
    ]} />
      <div className="row m-0 justify-content-center">
        <div className="col-12 p-4">
          <div className="row">
            <div className="col-12 col-xl-4 text-center p-0">
            <div className="d-flex justify-content-between align-items-center mb-3 px-2 px-xl-5">
            <div className="d-flex">
                <div>
                    <b className="me-1">{formatRating(facultyInfo?.overall_rating) || 0}</b>
                    ({facultyInfo?.review_count || 0})
                    <Rate 
                        style={{ marginLeft: "10px" }} 
                        disabled 
                        allowHalf 
                        defaultValue={0}
                        value={facultyInfo?.overall_rating || 0} 
                        className="searchbar-results-rate" 
                    />
                    </div>
                </div>
                <Tooltip placement="topRight" title="Invite to Review" open={!isLinkCopied}><span onClick={() => {
                    message.success("Link copied successfully")
                    setisLinkCopied(true)
                    navigator.clipboard.writeText(window.location.href)}}>
                    <i className="fa-regular fa-copy copy-icon me-3"></i>
                </span></Tooltip>
                                
                </div>

              <div className="text-center px-xl-5">
                <img src={facultyInfo?.image_url} alt={facultyInfo?.name} className="img-fluid rounded-circle mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                <h3>{facultyInfo?.name}</h3>
                <p className="text-muted">{facultyInfo?.designation}</p>
              </div>
              <ReviewInput facultyData={facultyInfo} fetch_reviews={fetch_reviews}/>
            </div>
            <div className="col-12 col-xl-8 p-0 mt-2 mt-xl-0">
              <h4>What others say</h4>
              <div id="scroll-box" className="p-3 reviews" style={{ maxHeight: "500px", overflowY: "scroll" }}>
                {reviews.length > 0 ? (
                  <List itemLayout="horizontal" dataSource={reviews} renderItem={(review) => (
                      <List.Item>
                        <Review review={review} isScrolling={isScrolling}/>
                      </List.Item>
                    )}
                  />
                ) : (
                  <p>No reviews available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Instructor;
