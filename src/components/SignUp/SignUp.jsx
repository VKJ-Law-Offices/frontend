import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    ref_code: "",
    software: "",
    isChecked: false,
  });

  const handleChangeValues = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phone, password } = values;

  };
  return (
    <div class="signup-body">
      <div class="signup-body-container">
        <div class="image-container">
          <img
            class="image"
            src="https://bookmepk.s3.eu-central-1.amazonaws.com/static/asset/images/1-366e748662cb111a2b7a15dbe49bd231.png"
            alt=""
          />
        </div>
        <div class="form-container">
          <h2 class="form-heading">Sign Up</h2>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChangeValues("name")}
            required
          />

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
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            pattern="[0-9]{10}"
            value={values.phone}
            onChange={handleChangeValues("phone")}
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

          <input
            type="text"
            id="ref_code"
            name="ref_code"
            placeholder="Referal Code (Optional)"
            value={values.ref_code}
            onChange={handleChangeValues("ref_code")}
          />

          <select
            id="software"
            name="software"
            value={values.software}
            onChange={handleChangeValues("software")}
            required
          >
            <option value="" disabled selected hidden>
              Accounting Software Name
            </option>
            <option value="Tally">Tally</option>
            <option value="Busy">Busy</option>
            <option value="Marg">Marg</option>
            <option value="Quickbooks">Quickbooks</option>
            <option value="Zoho">Zoho</option>
            <option value="Others">Others</option>
          </select>

          <div style={{ margin: "0 12%" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="checkbox"
                id="isChecked"
                name="isChecked"
                value={values.isChecked}
                onChange={() => {
                  values.isChecked = !values.isChecked;
                  setValues(values);
                }}
              />
              I accept the &nbsp;
              <a href="/terms_and_conditions" target="_blank">
                Terms &amp; Conditions
              </a>
              &nbsp;and&nbsp;
              <a href="/privacy_policy" target="_blank">
                Privacy Policy
              </a>
            </span>
          </div>

          <p style={{ margin: "5% 12% 0 1%", textAlign: "right" }}>
            Resend verification link
          </p>

          <div class="signup_button">
            <button type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>

          <div class="signin_link">
            Already registered? &nbsp;
            <NavLink to="/signin" variant="body2" className="signin_navlink">
              SignIn
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
