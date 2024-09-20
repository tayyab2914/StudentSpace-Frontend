import { combineReducers } from "redux";
import facultyReducer from "./FacultyReviewed/Reducer";

const rootReducer = combineReducers({
  facultyDataRedux: facultyReducer, // This key should be consistent
});

export default rootReducer;
