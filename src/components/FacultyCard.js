import React from "react";
import { Button, Card, Rate } from "antd";
import "./styles/FacultyCard.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const FacultyCard = ({ data }) => {
  const { id, name, designation, overall_rating, review_count, image_url } =
    data;
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={name}
          src={image_url || "https://via.placeholder.com/150"}
          className="faculty-image"
        />
      }
      className="faculty-card"
      onClick={() => navigate(`/faculty/${id}`)}
      data-aos="fade-up"
    >
     <div className="row m-0">
        <div className="col-12 p-0 d-flex flex-column" style={{height:`${window.innerWidth<500 ?  "100px":"180px"}`}}>
        <Meta
        title={name}
        description={designation}
        className="faculty-card-name"
      />
      <div className="faculty-rating text-start">
        <Rate
          allowHalf
          disabled
          defaultValue={overall_rating}
          className="product-card-rate"
        />
        <br />
        <span className="review-count">({review_count} reviews)</span>
      </div>
      <button class="button text-center mt-auto w-100">
        <p class="text m-0">Provide Review</p>
      </button>
        </div>
     </div>
    </Card>
  );
};

export default FacultyCard;
