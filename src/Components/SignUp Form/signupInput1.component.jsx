import React from "react";

import "./signupInput.styles.css";

const SignupInputOne = () => {
  return (
    <div>
      <div className="form-container">
        <form>
          <div className="form-input-group">
            <input
              type="text"
              placeholder="Write your first name"
              className="formInput"
            />
          </div>
          <div className="form-input-group">
            <input
              type="text"
              placeholder="Write your last name"
              className="formInput"
            />
          </div>
        </form>
      </div>
      <button
        className="btn btn-lg"
        style={{
          background: "#1678CB",
          color: "white",
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {" "}
        Next Step &#8594;
      </button>
    </div>
  );
};

export default SignupInputOne;
