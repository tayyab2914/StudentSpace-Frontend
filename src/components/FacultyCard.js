import React from "react";
import { Card, Rate } from "antd";
import "./styles/FacultyCard.css";
import { useNavigate } from "react-router-dom"; // make sure it's react-router-dom, not just "react-router"

const { Meta } = Card;

const FacultyCard = ({ data }) => {
  const { id, name, designation, overall_rating, review_count, image_url } = data;
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={<img alt={name} src={image_url || "https://via.placeholder.com/150"} className="faculty-image" />}
      className="faculty-card"
      onClick={() => navigate(`/faculty/${id}`, { state: { data } })} // Pass data as state
    >
      <Meta title={name} description={designation} />
      <div className="faculty-rating text-start">
        <Rate allowHalf disabled defaultValue={overall_rating} />
        <br />
        <span className="review-count">({review_count} reviews)</span>
      </div>
    </Card>
  );
};

export default FacultyCard;
