import React from 'react'

const Review = ({review}) => {
    const getAvatarUrl = () => {
        // Generate a random number between 1 and 1000
        const randomNumber = Math.floor(Math.random() * 1000);
        return `https://robohash.org/${randomNumber}?set=set4&size=50x50`; // Adjust `set` and `size` as needed
      };
  return (
    <div className="row w-100 review m-0">
        <div className="col-2 col-md-1 text-center p-0">
            <img src={getAvatarUrl(review.student_name)} alt="avatar" className="review-avatar" />
        </div>
        <div className="col-10 col-md-11 p-0">
            <strong className="review-author"> {review.student_name} </strong>
            <p className="review-text">{review.review_text}</p>
            <p className="review-ratings">
            <b>Grading Fairness:</b> <i class="fa-solid fa-star review-star"></i> {review.rating_grading_fairness}
            <span className='review-line-divider'> | </span>
            <br className='review-line-breaker'/>
            <b>Leniency:</b> <i class="fa-solid fa-star review-star"></i> {review.rating_leniency}
            <span className='review-line-divider'> | </span>
            <br className='review-line-breaker'/>
            <b>Subject Knowledge:</b> <i class="fa-solid fa-star review-star"></i> {review.rating_subject_knowledge}

            </p>
        </div>
    </div>
  )
}

export default Review
