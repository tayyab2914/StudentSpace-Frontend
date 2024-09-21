import React, { useState } from 'react';
import { Collapse, Rate, Input, Button, Form, Spin, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GET_RANDOM_NAME_COMBINATION } from '../values';
import { API_SUBMIT_REVIEW } from '../apis'; // Adjust import path as needed
import { addToFacultyReviewed } from '../redux/FacultyReviewed/Action';
import { trackRating, trackReview } from '../analytics/analytics_invokers';
// import { addToFacultyReviewed } from '../redux/FacultyReviewed/Action';

const { Panel } = Collapse;

const ReviewInput = ({ facultyData, fetch_reviews }) => {
  const [gradingFairness, setGradingFairness] = useState(0);
  const [leniency, setLeniency] = useState(0);
  const [subjectKnowledge, setSubjectKnowledge] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const dispatch = useDispatch();
  const reviewedFaculties = useSelector(state => state.facultyDataRedux.reviewedFaculties);
  const facultyDataRedux = useSelector(state => state.facultyDataRedux);
//   console.log(facultyDataRedux)

// console.log(facultyDataRedux)
  const handleSubmit = async (values) => {
    if (gradingFairness === 0 || leniency === 0 || subjectKnowledge === 0) {
      message.error("Please rate all categories before submitting.");
      return;
    }

    const isReviewed = reviewedFaculties.includes(facultyData.id);

    if (isReviewed) {
      message.error("You have already reviewed this faculty.");
    } else {
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
        // Add the faculty ID to reviewed list after successful review
        dispatch(addToFacultyReviewed(facultyData.id));
        setGradingFairness(0);
        setLeniency(0);
        setSubjectKnowledge(0);
        setReviewText("");
        fetch_reviews();
        trackRating(reviewData?.rating_grading_fairness)
        trackRating(reviewData?.rating_leniency)
        trackRating(reviewData?.rating_subject_knowledge)
        message.success("Review submitted successfully.");
        trackReview()
      } catch (error) {
        message.error("Failed to submit review. Please try again.");
      } finally {
        setShowSpinner(false);
      }
    }
  };

  return (
    <div className='text-start review-collapse pe-xl-3 mb-2'>
      {showSpinner && <Spin fullscreen className="spinner-overlay" />}
      <Collapse>
        <Panel header="Give Review" key="1">
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Grading Fairness"
              rules={[{ required: true, message: 'Please provide a rating for Grading Fairness.' }]}
            >
              <Rate
                onChange={setGradingFairness}
                value={gradingFairness}
              />
            </Form.Item>
            <Form.Item
              label="Leniency"
              rules={[{ required: true, message: 'Please provide a rating for Leniency.' }]}
            >
              <Rate
                onChange={setLeniency}
                value={leniency}
              />
            </Form.Item>
            <Form.Item
              label="Subject Knowledge"
              rules={[{ required: true, message: 'Please provide a rating for Subject Knowledge.' }]}
            >
              <Rate
                onChange={setSubjectKnowledge}
                value={subjectKnowledge}
              />
            </Form.Item>
            <Form.Item
              label="Review Text"
              name="reviewText"
              rules={[{ required: true, message: 'Please enter your review.' }]}
            >
              <Input.TextArea
                maxLength={150}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                showCount
                placeholder="Please provide a constructive feedback..."
                className='mb-3 mt-1'
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className='department-card-btn mt-3'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
};

export default ReviewInput;
