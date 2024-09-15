import axios from 'axios';
import { DOMAIN_NAME } from './values';



export const API_GET_FACULTIES_BY_DEPARTMENT = async (setShowSpinner, name) => {
  setShowSpinner(true);
  const formattedName = typeof name == 'string' ? name.toUpperCase() : '';
  console.log('formattedName:', formattedName);

  try {
    const response = await axios.get(`${DOMAIN_NAME}/feedback/faculties_by_department/`, {
      params: {
        department_code: formattedName,  
      },
    });
    console.log(response.data)
    
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    throw error; 
  } finally {
    setShowSpinner(false);
  }
};



export const API_GET_POPULAR_FACULTIES = async (setShowSpinner) => {
    setShowSpinner(true)
  try {
    const response = await axios.get(`${DOMAIN_NAME}/feedbacksystem/get_popular_faculties/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    throw error; 
  }finally{
    
    setShowSpinner(false)
  }
};


export const API_SEARCH_FACULTY = async (setShowSpinner, name) => {
    setShowSpinner(true);
    const formattedName = typeof name == 'string' ? name.toLowerCase() : '';
    console.log('formattedName:', formattedName);
  
    try {
      const response = await axios.get(`${DOMAIN_NAME}/feedback/search_faculty/`, {
        params: {
            name: formattedName,  
        },
      });
      console.log(response.data)
      
      return response.data;
    } catch (error) {
      console.error("Error fetching faculty data:", error);
      throw error; 
    } finally {
      setShowSpinner(false);
    }
  };