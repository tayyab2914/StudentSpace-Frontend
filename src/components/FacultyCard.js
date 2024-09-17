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
      onClick={() => navigate(`/faculty/${id}`)} 
       data-aos="fade-up"
    >
      <Meta title={name} description={designation} className="faculty-card-name"/>
      <div className="faculty-rating text-start">
        <Rate allowHalf disabled defaultValue={overall_rating} className="product-card-rate"/>
        <br />
        <span className="review-count">({review_count} reviews)</span>
      </div>
      <button class="button text-center mt-3 w-100">
  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg> */}
  <p class="text m-0">Provide Review</p>
</button>
      {/* <Button className='department-card-btn mt-3'>Provide Review</Button> */}
    </Card>
  );
};

export default FacultyCard;
