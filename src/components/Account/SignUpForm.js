import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { EMAIL_RULES_REQUIRED, PASSWORD_RULES_REQUIRED, VALIDATE_CONFIRM_PASSWORD } from "../Generic/Rules";

import './styles/signin.css'
import GoogleLoginBtn from "./GoogleLoginBtn";
const SignUpForm = ({ handleSignUp, handleSignInToggle }) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
      const values = await form.validateFields();
      const { email, password } = values;
      handleSignUp(email, password); 
  };

  return (
    <Form form={form} name="signupForm" className="signin-form" layout="vertical" >
      <h2 className="form-title">Welcome, create your account!</h2>

      <Form.Item hasFeedback label="Email" name="email" rules={EMAIL_RULES_REQUIRED} className="form-item">
        <Input placeholder="Enter your email" className="input-field" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item hasFeedback label="Password" name="password" rules={PASSWORD_RULES_REQUIRED} className="form-item">
        <Input.Password placeholder="Enter your password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item label="Confirm Password" name="confirmPassword" dependencies={['password']} hasFeedback rules={VALIDATE_CONFIRM_PASSWORD} className="form-item">
        <Input.Password placeholder="Confirm your password" className="input-field" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="button" className="submit-btn" onClick={onSubmit}>
          SIGN UP
        </Button>
      </Form.Item>

      <Divider>or</Divider>
      <div className="google-btn"><GoogleLoginBtn/></div>

      <p className="toggle-bar">
        <span className="dont-have-account">Already have an account?</span>
        <span className="signup-toggle" onClick={handleSignInToggle}> Sign in</span>
      </p>
    </Form>
  );
};

export default SignUpForm;
