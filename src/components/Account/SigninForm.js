// SignInForm Component
import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { EMAIL_RULES_REQUIRED, PASSWORD_RULES_REQUIRED } from "../Generic/Rules";
import './styles/signin.css'
import GoogleLoginBtn from "./GoogleLoginBtn";

const SigninForm = ({ handleSignIn, handleForgotPassword, handleSignUpToggle }) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      handleSignIn(values.email, values.password); // Pass form values to parent component
    } catch (errorInfo) {
      console.error('Failed to sign in:', errorInfo);
    }
  };

  return (
    <Form form={form} name="signinForm" className="signin-form" layout="vertical" >
      <h2 className="form-title">Welcome back, let's continue!</h2>

      <Form.Item hasFeedback label="Email" name="email" rules={EMAIL_RULES_REQUIRED} className="form-item">
        <Input placeholder="Enter your email" className="input-field" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item hasFeedback label="Password" name="password" rules={PASSWORD_RULES_REQUIRED} className="form-item">
        <Input.Password placeholder="Enter your password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item className="password-helper">
        <Button type="link" className="forgot-password-btn" onClick={handleForgotPassword}>
          Forgot Password?
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="button" className="submit-btn" onClick={onSubmit}>
          SIGN IN
        </Button>
      </Form.Item>

      <Divider>or</Divider>
      <div className="google-btn"><GoogleLoginBtn/></div>
      
      <p className="toggle-bar">
        <span className="dont-have-account">Don't have an account?</span>
        <span className="signup-toggle" onClick={handleSignUpToggle}> Sign up</span>
      </p>
    </Form>
  );
};

export default SigninForm;
