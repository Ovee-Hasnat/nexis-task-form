import React, { useState } from "react";

import logo from "../../assets/ultimate hrm logo-05-02 2.png";
import mainImage from "../../assets/istockphoto-1321277096-612x612 1.png";

import SignupOne from "../SignUp Form/signupOne.component";
import LoginForm from "../Login Form/login.component";

import "./main.styles.css";

const Main = () => {
  const [loginPageOpen, setLoginPageOpen] = useState(false);

  const loginPageOpenHandler = () => {
    setLoginPageOpen(!loginPageOpen);
  };

  console.log(loginPageOpen);

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-7 col-sm-12 left" style={{ padding: "0" }}>
          <img className="logo" src={logo} alt="Logo" />
          <img className="main-image" src={mainImage} alt="Human Resource" />
        </div>
        <div className="col-md-4 col-sm-12 right" style={{ padding: "0" }}>
          <div className="form" style={{ textAlign: "center" }}>
            <div>{loginPageOpen ? <LoginForm /> : <SignupOne />}</div>
            <div className="form_footer" style={{ marginTop: "10vh" }}>
              <div>
                {loginPageOpen ? (
                  <p>
                    Don't have an account?
                    <span
                      style={{
                        color: "#1678CB",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={loginPageOpenHandler}
                    >
                      {" "}
                      SIGN UP NOW!
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?
                    <span
                      style={{
                        color: "#1678CB",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={loginPageOpenHandler}
                    >
                      {" "}
                      LOGIN HERE!
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
