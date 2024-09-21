import React, { useEffect, useState } from 'react';
import { Popover, Menu, message, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { API_REPORT_REVIEW } from '../apis';
import { useDispatch, useSelector } from 'react-redux';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
// import { API_REPORT_REVIEW } from '../apis';
import './styles/Review.css'
import { addReportedReview } from '../redux/FacultyReviewed/Action';
const Review = ({ review, isScrolling}) => {
    const [visible, setVisible] = useState(false);
    const [showReasonPrompt, setShowReasonPrompt] = useState(false);
    const reportedReviews = useSelector(state => state.facultyDataRedux.reportedReviews);
    const dispatch = useDispatch();
    const [avatarUrl, setAvatarUrl] = useState(''); // State for storing the avatar URL

    useEffect(() => {
        // Set the avatar URL only once, when the component mounts
        const randomNumber = Math.floor(Math.random() * 100);
        setAvatarUrl(`https://robohash.org/${randomNumber}?set=set4&size=50x50`);
    }, [review?.student_name]); // Ensure the avatar stays consistent for each unique review

    useEffect(()=>{
        console.log(review)
        if(isScrolling)
        {
            
            setShowReasonPrompt(false);
            setVisible(false);  
        }
    })
    const getAvatarUrl = () => {
        // Generate a random number between 1 and 1000
        const randomNumber = Math.floor(Math.random() * 100);
        // const randomNumber2 = Math.floor(Math.random() * 5) + 1;
        return `https://robohash.org/${randomNumber}?set=set4&size=50x50`; // Adjust `set` and `size` as needed
    };

    const handleReportClick = () => {
        setShowReasonPrompt(true);
        setVisible(true);
    };

    const handleMenuClick = async (e) => {
        const selectedKey = e.key;
        const isReported = reportedReviews.includes(review?.id);

        if (isReported) {
          message.error("You have already reported this review?.");
        }
        else
        {
            if (showReasonPrompt) {
                const reasons = {
                    reason1: 'Inappropriate Content',
                    reason2: 'Spam',
                    reason3: 'Harassment',
                    reason4: 'False Information',
                };
        
                const selectedReason = reasons[selectedKey];
        
                
                await API_REPORT_REVIEW(review?.id, selectedReason);
                dispatch(addReportedReview(review?.id));
        
                setShowReasonPrompt(false);
                setVisible(false);  
            } else {
                // console.log(`Selected option: ${selectedKey}`);
                setVisible(false); 
            }
        }
    };
    
    const reasonPrompt = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item disabled style={{fontWeight:"600"}}>Why are you reporting this review?</Menu.Item>
            <Menu.Item key="reason1">Inappropriate Content</Menu.Item>
            <Menu.Item key="reason2">Spam</Menu.Item>
            <Menu.Item key="reason3">Harassment</Menu.Item>
            <Menu.Item key="reason4">False Information</Menu.Item>
            {/* <Menu.Item key="reason5">Other</Menu.Item> */}
        </Menu>
    );

    const reportMenu = (
        <Menu onClick={handleReportClick} className='p-0 m-0'>
            <Menu.Item key="report" className='report-menu-item'>Report</Menu.Item>
        </Menu>
    );

    return (
        <div style={{ position: 'relative', width: "100%" }}>
            <div className="row w-100 review m-0">
                <div className="col-2 col-md-1 text-center p-0">
                    <img src={avatarUrl} alt="avatar" className="review-avatar" />
                </div>
                <div className="col-10 col-md-11 p-0">
                    <strong className="review-author"> {review?.student_name} </strong>
                    {review?.is_blocked ?
                    <div className='mt-1'><Tag icon={<MinusCircleOutlined  />} color="error" bordered={false}>Reviewed against platform guidelines</Tag></div> 
                    : 
                    <p className="review-text">{review?.review_text}</p>}
                    <p className="review-ratings">
                        <i className="fa-solid fa-star review-star"></i> {review?.rating_grading_fairness} <b>Grading Fairness</b>
                        <span className='review-line-divider'> | </span>
                        <br className='review-line-breaker'/>
                        <i className="fa-solid fa-star review-star"></i> {review?.rating_leniency} <b>Leniency</b>
                        <span className='review-line-divider'> | </span>
                        <br className='review-line-breaker'/>
                        <i className="fa-solid fa-star review-star"></i> {review?.rating_subject_knowledge} <b>Subject Knowledge</b>
                    </p>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
            }} >
                <Popover
                    content={showReasonPrompt ? reasonPrompt : <span onClick={handleReportClick} className='report-btn'>Report</span>}
                    trigger="click"
                    
                    visible={visible}
                    onVisibleChange={(newVisible) => {
                        if (!newVisible) {
                            // Hide reason prompt when Popover is closed
                            setShowReasonPrompt(false);
                        }
                        setVisible(newVisible);
                    }}
                >
                    <EllipsisOutlined rotate={90} onClick={() => setVisible(!visible)} />
                </Popover>
            </div>
        </div>
    );
};

export default Review;
