import React from "react";

import "./signupInput.styles.css";

const SignupInputTwo = () => {
  return (
    <div>
      <div className="form-container">
        <form>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="form-input-group">
            <input
              type="text"
              placeholder="Write your email address"
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

export default SignupInputTwo;
