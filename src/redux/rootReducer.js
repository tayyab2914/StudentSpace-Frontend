import { combineReducers } from "redux";
import facultyReducer from "./FacultyReviewed/Reducer";
import authReducer from "./AuthToken/Reducer";

const rootReducer = combineReducers({
  facultyDataRedux: facultyReducer, 
  authToken :authReducer,
});

export default rootReducer;
