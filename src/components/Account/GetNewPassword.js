// GetNewPassword Component
import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import { API_SET_NEW_PASSWORD } from './Apis';
import './styles/Account.css'

const GetNewPassword = ({ email, verificationCode,onNewPasswordSubmit }) => {
  const [form] = Form.useForm();
  const [newPassword, setNewPassword] = useState('');

  const onSubmitNewPassword = async () => {
      await form.validateFields();
      onNewPasswordSubmit(newPassword)
  };

  return (
    <Form form={form} name="newPasswordForm" layout="vertical" autoComplete="off" className="signin-form" >
      <h2 className="form-title">Set a New Password</h2>

      <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please input your new password!' }]} className="form-item">
        <Input.Password placeholder="Enter your new password" onChange={(e) => setNewPassword(e.target.value)} 
          className="input-field"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="button" onClick={onSubmitNewPassword} className="submit-btn">
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GetNewPassword;
