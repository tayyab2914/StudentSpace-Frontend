import axios from "axios";
import { DOMAIN_NAME } from "./values";
import { message } from "antd";
import { trackReport } from "./analytics/analytics_invokers";

export const API_GET_FACULTIES_BY_DEPARTMENT = async (
  setShowSpinner,
  name,
  setshowError404
) => {
  setShowSpinner(true);
  const formattedName = typeof name == "string" ? name.toUpperCase() : "";

  console.log("HELLO");
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/feedback/faculties_by_department/`,
      {
        params: {
          department_code: formattedName,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error fetching faculty data:", error);
    setshowError404(true);
  } finally {
    setShowSpinner(false);
  }
};

export const API_GET_POPULAR_FACULTIES = async () => {
  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/feedback/popular_faculties/`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching faculty data:", error);
  } finally {
  }
};

export const API_GET_FACULTY_REVIEWS = async (setShowSpinner, id) => {
  setShowSpinner(true);
  try {
    const response = await axios.get(`${DOMAIN_NAME}/feedback/reviews/`, {
      params: {
        faculty_id: id,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching faculty data:", error);
  } finally {
    setShowSpinner(false);
  }
};
export const API_SEARCH_FACULTY = async (setShowSpinner, name) => {
  setShowSpinner(true);
  const formattedName = typeof name == "string" ? name.toLowerCase() : "";

  try {
    const response = await axios.get(
      `${DOMAIN_NAME}/feedback/search_faculty/`,
      {
        params: {
          name: formattedName,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error fetching faculty data:", error);
  } finally {
    setShowSpinner(false);
  }
};

export const API_SUBMIT_REVIEW = async (setShowSpinner, reviewData) => {
  setShowSpinner(true);

  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/feedback/submit_review/`,
      reviewData
    );

    message.success("Review Submitted Successfully");
    return response.data;
  } catch (error) {
    message.error(error?.response?.data?.error);
  } finally {
    setShowSpinner(false);
    //   window.location.reload()
  }
};

export const API_REPORT_REVIEW = async (id, reason) => {
  try {
    const response = await axios.post(
      `${DOMAIN_NAME}/feedback/report_review/`,
      { review_id: id, reason: reason }
    );
    message.success("Your report has been recorded successfully");
    trackReport();
    return response.data;
  } catch (error) {
  } finally {
    // setShowSpinner(false);
  }
};
