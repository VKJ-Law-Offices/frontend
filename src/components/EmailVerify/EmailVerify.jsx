import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { message, Spin, Modal, Button } from "antd";

const EmailVerify = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [validURL, setValidURL] = useState(false);
  const [redirectTo, setredirectTo] = useState(null);

  const [values, setValues2] = useState({
    newPassword: "",
    newCnfPassword: "",
  });

  const handleChangeValues2 = (prop) => (event) => {
    setValues2({ ...values, [prop]: event.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { userid, token } = useParams();

  const handleOk = async (event) => {
    event.preventDefault();

    const { newPassword, newCnfPassword } = values;

    if (newPassword !== newCnfPassword) {
      message.warning("Passwords did not match");
      return;
    }

    const res = await fetch("/api/users/forget/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        userid,
        newPassword,
      }),
    });

    const data = await res.json();

    if (!data.flag) {
      if (data.status === "Error") {
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

      values.newPassword = "";
      values.newCnfPassword = "";
      setValues2({ ...values });

      navigate("/signin", { replace: true });
    }
  };

  const params = new URLSearchParams(window.location.search);
  const reason = params.get("reason");

  const verifyEmailURL = async () => {
    const url = `/api/users/verify/mailverification`;

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        userid,
        token,
      }),
    });

    const data = await res.json();

    if (!data.flag) {
      if (data.status === "Error") {
        message.error(data.message);
        console.log(data.message);
      } else {
        message.error(data.error);
        console.log(data.error);
      }
    } else {
      setValidURL(true);
      setredirectTo(reason);
      message.success(data.message);
      console.log(data.message);
    }
  };

  useEffect(() => {
    verifyEmailURL().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        {loading ? (
          <div style={{ padding: "40vh 0" }}>
            <Spin size="large" />
          </div>
        ) : (
          <div style={{ fontSize: "150%", textAlign: "center", margin: "8%" }}>
            {validURL ? (
              <div>
                <h1>Congrats! Your account has been verified...</h1>
                <div class="signup_link" style={{ marginTop: "8%" }}>
                  {redirectTo === "signup" ? (
                    <NavLink
                      to="/signin"
                      variant="body2"
                      className="signin_navlink"
                    >
                      Proceed to SignIn
                    </NavLink>
                  ) : redirectTo === "forgetPassword" ? (
                    <div>
                      <Button
                        type="primary"
                        style={{ fontWeight: "700" }}
                        onClick={() => {
                          showModal();
                        }}
                      >
                        Create New Password
                      </Button>

                      <Modal
                        title="Create New Password"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Create New Password"
                        footer={[
                          <div
                            className="signin_button"
                            style={{ textAlign: "center" }}
                          >
                            <button
                              type="submit"
                              key="Create New Password"
                              onClick={handleOk}
                              style={{ margin: 0, width: "40%" }}
                            >
                              Create New Password
                            </button>
                          </div>,
                        ]}
                      >
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder="New Password"
                          value={values.newPassword}
                          onChange={handleChangeValues2("newPassword")}
                          required
                          style={{ width: "100%" }}
                        />
                        <input
                          type="password"
                          id="newCnfPassword"
                          name="newCnfPassword"
                          placeholder="Confirm New Password"
                          value={values.newCnfPassword}
                          onChange={handleChangeValues2("newCnfPassword")}
                          required
                          style={{ width: "100%" }}
                        />
                      </Modal>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ) : (
              <h1
                style={{ fontSize: "150%", textAlign: "center", margin: "8%" }}
              >
                Your account could not be verified!
              </h1>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EmailVerify;
