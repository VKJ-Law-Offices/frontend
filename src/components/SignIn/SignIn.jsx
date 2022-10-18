import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { message, Button, Modal } from "antd";
import "antd/dist/antd.css";


const SignIn = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeValues = (props)=> (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const [values2, setValues2] = useState({
    email: "",
  });

  const handleChangeValues2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const { email, password } = values;

    const regex_email =
      /^([a-z A-Z 0-9 \.-_]+)@([a-z A-Z 0-9 \.-_]+)\.([a-z]+)(\.[a-z]{2,5})?$/;

    if (!regex_email.test(values.email)) {
      message.warning("Please enter a valid email");
      return;
    }

    if (!values.password.trim()) {
      message.warning("Please fill the entries properly");
      return;
    }

    const res = await fetch("https://msme-backend.herokuapp.com/api/users/login", {
      method: "PUT",
      mode:"cors",
      headers: {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        email:values.email,
        password:values.password,
      })
    });

    console.log(JSON.stringify({
      email:values.email,
      password:values.password,
    }));

    // console.log(JSON.parse([]));
    const data = await res.json();
    

    if (!data.flag) { 
      message.error(data.error);
      console.log(data.error);
    } else {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userDetails", JSON.stringify(data.body.userDetails.Item));
      console.log(data.body.userDetails.Item);

      message.success(data.message);
      console.log(data.message);

      navigate("/dashboard", { replace: true });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = async (event) => {
    event.preventDefault();

    const { email } = values2;

    const reason = "forgetPassword";

    const regex_email =
      /^([a-z A-Z 0-9 \.-_]+)@([a-z A-Z 0-9 \.-_]+)\.([a-z]+)(\.[a-z]{2,5})?$/;

    if (!regex_email.test(email)) {
      message.warning("Please enter a valid email");
      return;
    }

    const res = await fetch("/api/users/send/verificationlink", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        email,
        reason,
      }),
    });

    const data = await res.json();

    if (!data.flag) {
      if (data.status === "OK") {
        message.error(data.message);
        console.log(data.message);
      } else {
        message.error(data.error);
        console.log(data.error);
      }
    } else {
      message.success(data.message);
      console.log(data.message);

      handleCancel();

      values2.email = "";
      setValues2({ ...values2 });
    }
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

          <div style={{ margin: "5% 12% 0 1%", textAlign: "right" }}>
            <Button
              type="link"
              style={{ fontWeight: "700" }}
              onClick={() => {
                showModal();
              }}
            >
              Forgot Password?
            </Button>

            <Modal
              title="Forgot Password"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Reset Password"
              footer={[
                <div className="signin_button" style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    key="Reset Password"
                    onClick={handleOk}
                    style={{ margin: 0 }}
                  >
                    Reset Password
                  </button>
                </div>,
              ]}
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={values2.email}
                onChange={handleChangeValues2("email")}
                required
                style={{ width: "100%" }}
              />
            </Modal>
          </div>

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
