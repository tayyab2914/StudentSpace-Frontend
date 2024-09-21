// src/redux/reducers/facultyReducer.js
import { ADD_FACULTY_REVIEWED, CHECK_IF_EXIST_IN_FACULTY, ADD_REPORTED_REVIEW, SET_NOTICE_ALREADY_SHOWN } from './Types';

const initialState = {
  reviewedFaculties: [], 
  reportedReviews: [], 
  isNoticeAlreadyShown:false
};

export default function facultyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FACULTY_REVIEWED:
      return {
        ...state,
        reviewedFaculties: [
          ...new Set([...state.reviewedFaculties, action.payload]),
        ],
      };
    case CHECK_IF_EXIST_IN_FACULTY:
      return {
        ...state,
        reviewedFaculties: state.reviewedFaculties.includes(action.payload),
      };
    case ADD_REPORTED_REVIEW:
      return {
        ...state,
        reportedReviews: [
          ...new Set([...state.reportedReviews, action.payload]),
        ],
      };
      case SET_NOTICE_ALREADY_SHOWN:
      return {
        ...state,
        isNoticeAlreadyShown: true, // Set isNoticeAlreadyShown to true when action is dispatched
      };
    default:
      return state;
  }
}
