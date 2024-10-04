import React from "react";
import { Progress } from "antd"; // Import Progress component from Ant Design
import "../styles/ReviewRatings.css";

const ReviewRatings = ({ rating_grading_fairness, rating_leniency, rating_subject_knowledge }) => {

  const getSkillColor = (rating) => {
    if (rating < 40) return '#ff4d4f'; // Red for ratings < 40
    else if (rating < 75) return '#ffd000'; // Yellow for ratings < 75
    else return '#52c41a'; // Green for ratings >= 75
  };

  return (
    <div className="pe-xl-3 mb-2">
      <div className="review-rating-container">
        {/* Grading Fairness */}
        <div className="skill-box">
          <span className="title">Grading Fairness</span>
          <Progress 
          size={window.innerWidth<1000 ? 50 : 80}
            type="circle"
            percent={Math.floor(rating_grading_fairness)} 
            strokeColor={getSkillColor(rating_grading_fairness)} 
            format={percent => `${percent}%`} // Tooltip with percentage
          />
        </div>

        {/* Leniency */}
        <div className="skill-box">
          <span className="title">Leniency</span>
          <Progress 
          size={window.innerWidth<1000 ? 50 : 80}
            type="circle"
            percent={Math.floor(rating_leniency)} 
            strokeColor={getSkillColor(rating_leniency)} 
            format={percent => `${percent}%`} // Tooltip with percentage
          />
        </div>

        {/* Subject Knowledge */}
        <div className="skill-box">
          <span className="title">Subject Knowledge</span>
          <Progress 
          size={window.innerWidth<1000 ? 50 : 80}
            type="circle"
            percent={Math.floor(rating_subject_knowledge)} 
            strokeColor={getSkillColor(rating_subject_knowledge)} 
            format={percent => `${percent}%`} // Tooltip with percentage
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewRatings;
