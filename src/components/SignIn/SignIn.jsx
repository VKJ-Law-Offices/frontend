import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeValues = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = values;

  };

  return (
    <div class="signin-body">
      <div class="signin-body-container">
        <div class="image-container">
          <img
            class="image"
            src="https://bookmepk.s3.eu-central-1.amazonaws.com/static/asset/images/1-366e748662cb111a2b7a15dbe49bd231.png"
            alt=""
          />
        </div>
        <div class="form-container">
          <h2 class="form-heading">Sign In</h2>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChangeValues("email")}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChangeValues("password")}
            required
          />

          <p style={{ margin: "5% 12% 0 1%", textAlign: "right" }}>
            Forgot Password?
          </p>

          <div class="signin_button">
            <button type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </div>

          <div class="signup_link">
            New User? &nbsp;
            <NavLink to="/signup" variant="body2" className="signup_navlink">
              SignUp
            </NavLink>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <a
              href="/privacy_policy"
              target="_blank"
              style={{ margin: "5% 10% 5% 5%" }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms_and_conditions"
              target="_blank"
              style={{ margin: "5% 5% 5% 10%" }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
