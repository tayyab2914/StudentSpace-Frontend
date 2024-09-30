import GoogleButton from "react-google-button";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { API_GOOGLE_SIGN_IN } from "./Apis";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const onGoogleLoginSuccess = () => {
  const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
  const REDIRECT_URI = "auth/api/login/google/";

  const scope = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" ");

  const params = {
    response_type: "code",
    client_id:
      "337525075460-6ltsjfmn3f0nl66q2jg3am4qr292981h.apps.googleusercontent.com",
    redirect_uri: `http://localhost:3000/account`,
    prompt: "select_account",
    access_type: "offline",
    scope,
  };

  const urlParams = new URLSearchParams(params).toString();
  window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
};

const GoogleLoginBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ShowSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchEmail();
    }
  }, []);

  const fetchEmail = async () => {
    const code = new URLSearchParams(window.location.search).get("code");
    API_GOOGLE_SIGN_IN(code, dispatch, navigate, setShowSpinner);
  };

  return (
    <>
      {ShowSpinner && <Spin fullscreen />}
      <GoogleButton
        onClick={onGoogleLoginSuccess}
        label="Sign in with Google"
      />
    </>
  );
};

export default GoogleLoginBtn;
