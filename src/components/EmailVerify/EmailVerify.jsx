import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import { message, Spin } from "antd";
import { useQuery } from 'react-query'



const EmailVerify = () => {
  const [loading, setLoading] = useState(true);
  const [validURL, setValidURL] = useState(false);
  const [redirectTo, setredirectTo] = useState(null)

  const { userid, token } = useParams();
  const params = new URLSearchParams(window.location.search);
  const reason = params.get('reason');

  // console.log("reason:", reason)
  const verifyEmailURL = async () => {
    const url = `/api/users/verify/mailverification`;

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    verifyEmailURL().then(()=>{
      setLoading(false);
    })
  }, []);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        {loading ? (
          <div style={{padding:"40vh 0"}}>
            <Spin size="large"/>
          </div>
        ) : (
          <div style={{ fontSize: "150%", textAlign: "center", margin: "8%" }}>
            {validURL ? (
              <div>
                <h1>Congrats! Your account has been verified...</h1>
                <div class="signup_link" style={{ marginTop: "8%" }}>
                  {(redirectTo ==='signup' ) ? 
                  (
                    <NavLink
                    to="/signin"
                    variant="body2"
                    className="signin_navlink"
                  >
                    Proceed to SignIn
                  </NavLink>
                  ): ( redirectTo === 'forgetPassword') ? 
                  (
                    <NavLink
                    to="/signup"
                    variant="body2"
                    className="signin_navlink"
                  >
                    Proceed to reset password
                  </NavLink>
                  ): ( <div></div>)
                  }
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
