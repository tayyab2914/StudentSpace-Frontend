import React, { useEffect, useState } from "react";
import MyNavbar from "../components/Generic/Navbar";
import { useLocation, useParams } from "react-router-dom"; // Import useParams
import { Rate, Spin, List, message, Tooltip, Breadcrumb } from "antd";
import { API_GET_FACULTY_REVIEWS } from "../apis";
import "./styles/Instructor.css";
import Review from "../components/Reviews/Review";
import ReviewInput from "../components/Reviews/ReviewInput";
import { calculateAverageRatings, formatRating, getFacultyNameByDepNo } from "../values";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Generic/Footer";
import ReviewRatings from "../components/Reviews/ReviewRatings";
import image404 from '../assets/404.svg'
import { useDispatch, useSelector } from 'react-redux';
import { trackRating, trackReview } from "../analytics/analytics_invokers";
import { handleSubmitReview } from "../components/Reviews/Functionality";

const Instructor = () => {
    const location = useLocation();
  const { instructor_id } = useParams(); // Extract instructor_id
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [facultyInfo, setFacultyInfo] = useState(null);
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate()
  const [showError404, setshowError404] = useState(false);
    const [isLinkCopied, setisLinkCopied] = useState(false);
    const [averageGradingFairness, setAverageGradingFairness] = useState(0);
    const [averageLeniency, setAverageLeniency] = useState(0);
    const [averageSubjectKnowledge, setAverageSubjectKnowledge] = useState(0);



    const submit_review = async() => {
    
        // Use URLSearchParams to parse the query parameters
        const searchParams = new URLSearchParams(location.search);
        const next = searchParams.get('next');
        const leniency = searchParams.get('leniency');
        const subjectKnowledge = searchParams.get('subjectKnowledge');
        const gradingFairness = searchParams.get('gradingFairness');
        const reviewText = searchParams.get('reviewText');
        console.log("HELO")
        if(leniency)
            {
                await handleSubmitReview( gradingFairness, leniency, subjectKnowledge, reviewText, instructor_id,  setShowSpinner, fetch_reviews, trackRating, trackReview,token );
                navigate(next)
            }
    }
useEffect(()=>{
    window.scrollTo({ top: 0,behavior: 'smooth'});

    submit_review() //! works if query param has linienecy
    

},[])
  const fetch_reviews = async () => {
    try {
      const response = await API_GET_FACULTY_REVIEWS(setShowSpinner, instructor_id); // Use instructor_id
      setReviews(response.reviews.reverse());
      setFacultyInfo(response.faculty);
      console.log(response)
    
      // Use the helper function to calculate averages
      const averages = calculateAverageRatings(response.reviews);

      setAverageGradingFairness(averages.averageGradingFairness);
      setAverageLeniency(averages.averageLeniency);
      setAverageSubjectKnowledge(averages.averageSubjectKnowledge);
    } catch (error) {
        setshowError404(true)
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
    {showError404 ? <>
    
        <div className="row m-0 pt-5" style={{height:"400px"}}>
        <div className="col-12 text-center align-self-center">
            
      <img src={image404} alt="" style={{height:"300px",textAlign:"center"}}/>
        </div>
      </div>
      </>:
    <>
      <Breadcrumb 
       className="ms-4 mb-1 mt-0"
       items={[
        { title: <a onClick={()=>navigate('/')}>Home</a> },
        { title: <a onClick={()=>navigate(`/department/${getFacultyNameByDepNo(facultyInfo?.department)}`)}>{getFacultyNameByDepNo(facultyInfo?.department).toUpperCase()}</a>},
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
                    <Rate  style={{ marginLeft: "10px" }}  disabled  allowHalf  defaultValue={0} value={facultyInfo?.overall_rating || 0}  className="searchbar-results-rate"  />
                    </div>
                </div>
                <Tooltip placement="topRight" title="Invite to Review" open={!isLinkCopied} >
                    <span onClick={() => {
                        message.success("Link copied successfully")
                        setisLinkCopied(true)
                        navigator.clipboard.writeText(window.location.href)}}>
                        <i className="fa-regular fa-copy copy-icon me-3 " ></i>
                    </span>
                </Tooltip>
                                
                </div>

              <div className="text-center px-xl-5">
                <img src={facultyInfo?.image_url} alt={facultyInfo?.name} className="img-fluid rounded-circle mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
                <h3>{facultyInfo?.name}</h3>
                <p className="text-muted">{facultyInfo?.designation}</p>
              </div>
              <ReviewRatings rating_grading_fairness={averageGradingFairness} rating_leniency={averageLeniency} rating_subject_knowledge={averageSubjectKnowledge} />
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
      </>}
      <Footer/>
    </div>
  );
};

export default Instructor;
