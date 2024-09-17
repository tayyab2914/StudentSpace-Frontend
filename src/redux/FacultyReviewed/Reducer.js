import { ADD_FACULTY_REVIEWED, CHECK_IF_EXIST_IN_FACULTY } from "./Types";

const initialState = {
    reviewedFaculties: [], // Initial state should be an array
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
    default:
      return state;
  }
}
