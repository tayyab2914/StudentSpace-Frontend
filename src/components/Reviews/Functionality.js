import { message } from 'antd'; // Import necessary functions
import { addToFacultyReviewed } from '../../redux/FacultyReviewed/Action';
import { GET_RANDOM_NAME_COMBINATION } from '../../values';
import { API_SUBMIT_REVIEW } from '../../apis';
import { trackReview } from '../../analytics/analytics_invokers';
 // Import necessary actions

export const handleSubmitReview = async ( values, gradingFairness, leniency, subjectKnowledge, reviewText, facultyData, reviewedFaculties, setShowSpinner, dispatch, fetch_reviews, trackRating, trackRevie ) => {
  
    if (gradingFairness === 0 || leniency === 0 || subjectKnowledge === 0) {
    message.error("Please rate all categories before submitting.");
    return;
  }

  const isReviewed = reviewedFaculties.includes(facultyData.id);

//   if (isReviewed) {
//     message.error("You have already reviewed this faculty.");
//   } else {
    const studentName = GET_RANDOM_NAME_COMBINATION();
    const reviewData = {
      faculty_id: facultyData.id,
      student_name: studentName,
      rating_grading_fairness: gradingFairness,
      rating_leniency: leniency,
      rating_subject_knowledge: subjectKnowledge,
      review_text: reviewText,
    };

    setShowSpinner(true);

    try {
      await API_SUBMIT_REVIEW(setShowSpinner, reviewData);
      dispatch(addToFacultyReviewed(facultyData.id));
      fetch_reviews();
      trackRating(reviewData.rating_grading_fairness);
      trackRating(reviewData.rating_leniency);
      trackRating(reviewData.rating_subject_knowledge);
      trackReview();
    } catch (error) {
      message.error("Error submitting review");
    } finally {
      setShowSpinner(false);
    }
//   }
};