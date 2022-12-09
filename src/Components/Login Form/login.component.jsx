import React from "react";

import LoginInput from "./loginInput.component";

const LoginForm = () => {
  return (
    <div>
      <p
        className="form_header"
        style={{
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "24px",
          display: "inline-block",
          marginTop: "100px",
        }}
      >
        Login Form
      </p>

      <LoginInput />
    </div>
  );
};

export default LoginForm;
