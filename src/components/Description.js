import React, { useEffect } from "react";
import { notification, Button } from "antd"; // Import Button from antd
import { useDispatch, useSelector } from "react-redux";
import { setNoticeAlreadyShown } from "../redux/FacultyReviewed/Action";

const Description = () => {
  const [api, contextHolder] = notification.useNotification(); // Use notification API
  const isNoticeAlreadyShown = useSelector(
    (state) => state.facultyDataRedux.isNoticeAlreadyShown
  );
  const dispatch = useDispatch();
  const openNotification = () => {
    const key = `open${Date.now()}`; // Unique key for manual control of the notification

    const btn = (
      <Button
        type="primary"
        size="small"
        className="acknowledge-btn"
        onClick={() => {
          api.destroy(key);

          dispatch(setNoticeAlreadyShown());
        }} // Destroy the notification on click
      >
        Acknowledge
      </Button>
    );

    api.open({
      message: (
        <b>
          <h4>Notice</h4>
        </b>
      ), // Title of the notification
      description: (
        <div>
          <p>
            Student Space contains personal reviews and opinions from students,
            not official endorsements from any university. We created this
            platform to share experiences, which can be removed upon request
            from the university. Please note that the content reflects
            individual perspectives and should be used at your own discretion.
            We humbly ask that any concerns be addressed with an open mind, as
            we aim to create a positive and helpful platform for students.
          </p>
        </div>
      ),
      btn, // Attach the button as part of the notification
      key, // Set the key to control the notification programmatically
      duration: 0, // Prevent auto-close
      placement: "bottomLeft", // Position the notification at the bottom-left
    });
  };

  useEffect(() => {
    if (!isNoticeAlreadyShown) {
      openNotification(); // Show the notification when the component mounts
    }
  }, []);

  return <>{contextHolder}</>; // Ensure the notification context is rendered
};

export default Description;
