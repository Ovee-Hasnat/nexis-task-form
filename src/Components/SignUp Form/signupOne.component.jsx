import React from "react";

import SignupInputOne from "./signupInput1.component";

const SignupOne = () => {
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
        SignUp Form
      </p>

      <div>
        <SignupInputOne />
      </div>

      
    </div>
  );
};

export default SignupOne;
