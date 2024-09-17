import { ADD_FACULTY_REVIEWED, CHECK_IF_EXIST_IN_FACULTY } from './Types';

// Action to add a faculty ID to the reviewed array
export const addToFacultyReviewed = (facultyId) => {
  console.log('addToFacultyReviewed');
  return {
    type: ADD_FACULTY_REVIEWED,
    payload: facultyId,
  };
};

// Action to check if a faculty ID exists in the reviewed array
export const checkIfExistInFaculty = (facultyId) => ({
  type: CHECK_IF_EXIST_IN_FACULTY,
  payload: facultyId,
});
