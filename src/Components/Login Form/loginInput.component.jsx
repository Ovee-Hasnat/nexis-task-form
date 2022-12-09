import React from "react";

const LoginInput = () => {
  return (
    <div>
      <div className="form-container">
        <form>
          <div className="form-input-group">
            <input
              type="text"
              placeholder="Write email address"
              className="formInput"
            />
          </div>
          <div className="form-input-group">
            <input
              type="text"
              placeholder="Write password"
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
        Log In
      </button>
    </div>
  );
};

export default LoginInput;
