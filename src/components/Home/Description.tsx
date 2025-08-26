'use client';

import React, { useEffect } from "react";
import { notification, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNoticeAlreadyShown } from "@/redux/FacultyReviewed/Action";

const Description = () => {
  const [api, contextHolder] = notification.useNotification();
  const isNoticeAlreadyShown = useSelector(
    (state: any) => state.facultyDataRedux.isNoticeAlreadyShown
  );
  const dispatch = useDispatch();
  
  const openNotification = () => {
    const key = `open${Date.now()}`;

    const btn = (
      <Button
        type="primary"
        size="small"
        className="acknowledge-btn"
        onClick={() => {
          api.destroy(key);
          dispatch(setNoticeAlreadyShown());
        }}
      >
        Acknowledge
      </Button>
    );

    api.open({
      message: (
        <b>
          <h4>Notice</h4>
        </b>
      ),
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
      btn,
      key,
      duration: 0,
      placement: "bottomLeft",
    });
  };

  useEffect(() => {
    if (!isNoticeAlreadyShown) {
      openNotification();
    }
  }, []);

  return <>{contextHolder}</>;
};

export default Description;