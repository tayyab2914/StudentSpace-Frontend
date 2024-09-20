import { Card, Skeleton } from 'antd'
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
      {/* <Skeleton.Input active={true} style={{height:"15px !important", marginTop:"10px",width:"130px !important"}}/>
      <Skeleton.Input active={true} style={{height:"15px !important", marginTop:"10px",width:"130px !important"}}/> */}

      {/* <div className="faculty-rating-shimmer text-center"> */}
      <Skeleton active/>
      {/* </div> */}

      <div className="button-shimmer shimmer"></div>
    </div>
  </div>
</Card>
  )
}

export default Shimmer
