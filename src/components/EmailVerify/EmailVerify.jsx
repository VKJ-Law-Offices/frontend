import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import { message, Button } from "antd";

const EmailVerify = () => {
  const [validURL, setValidURL] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailURL = async () => {
      try {
        const url = `/api/users/verify/mailverification/${param.userid}/:${param.token}`;

        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!data.flag) {
          message.error(data.error);
          console.log(data.error);
        } else {
          setValidURL(true);
          message.success(data.message);
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
        setValidURL(false);
      }
    };
  });

  return (
    <Fragment>
      <div style={{ textAlign: "center", margin: "5%" }}>
        {validURL ? (
          <div>
            <h1>Congrats! Your account has been verified...</h1>
            <div class="signup_link">
              <NavLink to="/signin" variant="body2" className="signin_navlink">
                Proceed to SignIn
              </NavLink>
            </div>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </div>
    </Fragment>
  );
};

export default EmailVerify;
