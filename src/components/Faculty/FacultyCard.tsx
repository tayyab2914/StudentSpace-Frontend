'use client';

import React from "react";
import { Button, Card, Rate } from "antd";
import "../styles/FacultyCard.css";
import { useRouter } from "next/navigation";
import { formatRating } from "@/values";
import Image from "next/image";

const { Meta } = Card;

interface FacultyCardProps {
  data: {
    id: number;
    slug: string;
    name: string;
    designation: string;
    overall_rating: number;
    review_count: number;
    image_url: string;
  };
}

const FacultyCard: React.FC<FacultyCardProps> = ({ data }) => {
  const { id, slug, name, designation, overall_rating, review_count, image_url } = data;
  const router = useRouter();

  return (
    <Card
      hoverable
      cover={
        <Image
          alt={name}
          src={image_url || "https://via.placeholder.com/150"}
          width={300}
          height={300}
          className="faculty-image"
          style={{ objectFit: 'cover' }}
        />
      }
      className="faculty-card"
      onClick={() => router.push(`/faculty/${slug}`)}
      data-aos="fade-up"
    >
     <div className="row m-0">
        <div className="col-12 p-0 d-flex flex-column card-height" >
        <Meta
        title={name}
        description={designation}
        className="faculty-card-name"
      />
      <div className="faculty-rating text-center">
        {formatRating(overall_rating)}
        <Rate
          allowHalf
          disabled
          defaultValue={overall_rating}
          className="product-card-rate ms-2"
        />
        <br />
        <span className="review-count m-0">({review_count} {review_count==1? "review":"reviews"})</span>
      </div>
      <button className="faculty-card-button text-center mt-auto w-100">
        <p className="text m-0">GIVE REVIEW</p>
      </button>
        </div>
     </div>
    </Card>
  );
};

export default FacultyCard;