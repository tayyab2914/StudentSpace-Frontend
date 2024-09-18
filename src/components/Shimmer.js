import { Card } from 'antd'
import React from 'react'
import './styles/Shimmer.css'

const Shimmer = () => {
  return (
    <Card
  hoverable
  cover={
    <div className="faculty-image-shimmer shimmer faculty-image"></div>
  }
  className="faculty-card"
  data-aos="fade-up"
>
  <div className="row m-0">
    <div className="col-12 p-0 d-flex flex-column card-height text-center">
    <div className="faculty-rating-shimmer text-center">
        <div className="name-shimmer shimmer"></div>
        <div className="name-shimmer shimmer my-1"></div>
      </div>

      <div className="faculty-rating-shimmer text-center">
        <div className="rate-shimmer shimmer"></div>
        <div className="review-count-shimmer shimmer"></div>
      </div>

      <div className="button-shimmer shimmer"></div>
    </div>
  </div>
</Card>
  )
}

export default Shimmer
