import React, { useState } from 'react';
import { Collapse, Rate, Input, Button, Form, Spin, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { trackRating, trackReview } from '../../analytics/analytics_invokers';

import { useNavigate,useLocation } from "react-router";
import { handleSubmitReview } from './Functionality';
const { Panel } = Collapse;

const ReviewInput = ({ facultyData, fetch_reviews }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [gradingFairness, setGradingFairness] = useState(0);
  const [leniency, setLeniency] = useState(0);
  const [subjectKnowledge, setSubjectKnowledge] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const { token, isLoggedIn } = useSelector((state) => state.authToken);
  const reviewedFaculties = useSelector(state => state.facultyDataRedux.reviewedFaculties);
  const facultyDataRedux = useSelector(state => state.facultyDataRedux);
  
  
  const handleSubmit = async (values) => {
    if(isLoggedIn)
    {
        await handleSubmitReview(  gradingFairness, leniency, subjectKnowledge, reviewText, facultyData?.id,  setShowSpinner,  fetch_reviews, trackRating, trackReview,token );
    }
    else
    {
        navigate(`/account?next=/faculty/${facultyData.id}&leniency=${leniency}&subjectKnowledge=${subjectKnowledge}&gradingFairness=${gradingFairness}&reviewText=${reviewText}`);
    }
};

  return (
    <div className='text-start review-collapse pe-xl-3 mb-2'>
      {showSpinner && <Spin fullscreen className="spinner-overlay" />}
      <Collapse>
        <Panel header="Give Review" key="1">
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Grading Fairness" rules={[{ required: true, message: 'Please provide a rating for Grading Fairness.' }]} >
              <Rate onChange={setGradingFairness} value={gradingFairness} />
            </Form.Item>
            <Form.Item label="Leniency" rules={[{ required: true, message: 'Please provide a rating for Leniency.' }]} >
              <Rate onChange={setLeniency} value={leniency} />
            </Form.Item>
            <Form.Item label="Subject Knowledge" rules={[{ required: true, message: 'Please provide a rating for Subject Knowledge.' }]} >
              <Rate onChange={setSubjectKnowledge} value={subjectKnowledge} />
            </Form.Item>
            <Form.Item label="Review Text" name="reviewText" rules={[{ required: true, message: 'Please enter your review.' }]} >
              <Input.TextArea maxLength={150} value={reviewText} onChange={(e) => setReviewText(e.target.value)} showCount placeholder="Please provide a constructive feedback..." className='mb-3 mt-1' />
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
