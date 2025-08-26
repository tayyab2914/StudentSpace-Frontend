'use client';

import React from "react";
import { Divider, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";
import { formatRating } from "@/values";
import Image from "next/image";
import "../styles/Ranked.css";

interface RankedProps {
  data: Array<{
    slug: string;
    name: string;
    designation: string;
    overall_rating: number;
    review_count: number;
    image_url: string;
  }>;
}

const Ranked: React.FC<RankedProps> = ({ data }) => {
  const router = useRouter();
  const medals = ["/1.svg", "/2.svg", "/3.svg", "/4.svg"];

  return (
    <div className="most-reviewed pb-3">
      <Divider orientation="center" className="mb-0 mb-sm-3">
        <h2>Highly Appreciated</h2>
      </Divider>

      <div className="container-xxl">
        <div className="row m-0 px-0 justify-content-center">
          {data.map((faculty, index) => (
            <div
              key={faculty.slug}
              className="col-6 col-md-4 col-xl-3 p-1 p-md-3"
              onClick={() => router.push(`/faculty/${faculty.slug}`)}
              data-aos="fade-up"
            >
              <div className="top-review-container">
                <div className="card-container">
                  <div className="card">
                    <div className="image-container">
                      <Image
                        src={faculty.image_url}
                        alt={faculty.name}
                        width={128}
                        height={128}
                        className="profile-img"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="card-content">
                      <div className="header">
                        <div className="row text-start m-0 pt-3">
                          <div className="col-12 p-0">
                            {formatRating(faculty.overall_rating)}
                            <Rate
                              allowHalf
                              disabled
                              defaultValue={faculty.overall_rating}
                              className="ranked-card-rate ms-2"
                            />
                          </div>
                          <div className="col-12 review-content p-sm-0 p-0">
                            <span className="review-count m-0">
                              ({faculty.review_count} {faculty.review_count === 1 ? "review" : "reviews"})
                            </span>
                          </div>
                        </div>
                        <Image
                          src={medals[index]}
                          alt="Position Icon"
                          width={64}
                          height={64}
                          className="position-icon"
                        />
                      </div>
                      <Meta
                        title={faculty.name}
                        description={faculty.designation}
                        className="faculty-card-name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranked;