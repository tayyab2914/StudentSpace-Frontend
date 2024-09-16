import React from "react";
import { Button, Card, Rate } from "antd";
import "./styles/FacultyCard.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const FacultyCard = ({ data }) => {
  const { id, name, designation, overall_rating, review_count, image_url } = data;
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={<img alt={name} src={image_url || "https://via.placeholder.com/150"} className="faculty-image" />}
      className="faculty-card"
      onClick={() => navigate(`/faculty/${id}`)} // Navigate without passing state
    >
      <Meta title={name} description={designation} className="faculty-card-name"/>
      <div className="faculty-rating text-start">
        <Rate allowHalf disabled defaultValue={overall_rating} />
        <br />
        <span className="review-count">({review_count} reviews)</span>
      </div>
      <Button className='department-card-btn mt-3'>Provide Review</Button>
    </Card>
  );
};

export default FacultyCard;
