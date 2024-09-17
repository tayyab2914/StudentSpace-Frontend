import React from "react";
import { Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles/FacultyCard.css";

const { Meta } = Card;

const FacultyCard = ({ data }) => {
  const { id, name, designation, overall_rating, review_count, image_url } = data;
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={<img alt={name} src={image_url || "https://via.placeholder.com/150"} className="faculty-image" />}
      className="faculty-card"
      onClick={() => navigate(`/faculty/${id}`)} 
      data-aos="fade-up"
    >
      <div className="faculty-card-content">
        <Meta title={name} description={designation} className="faculty-card-name"/>
        <div className="faculty-rating">
          <Rate allowHalf disabled defaultValue={overall_rating} className="product-card-rate"/>
          <br />
          <span className="review-count">({review_count} reviews)</span>
        </div>
      </div>
      <button className="button text-center">
        <p className="text m-0">Provide Review</p>
      </button>
    </Card>
  );
};

export default FacultyCard;
