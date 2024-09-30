export const EMAIL_RULES_REQUIRED = [
  { required: true, message: "Please input your email!" },
  { type: "email", message: "The input is not valid E-mail!" }, // Validate email format
];

export const PASSWORD_RULES_REQUIRED = [
  { required: true, message: "Please input your password!" },
  { min: 8, message: "Password must be at least 8 characters long!" }, // Validate minimum password length
];
export const VALIDATE_CONFIRM_PASSWORD = [
  { required: true, message: "Please confirm your password!" },
  // Custom validator to check if the password matches confirm password
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The two passwords do not match!"));
    },
  }),
];
