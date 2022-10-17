import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");

    navigate("/signin", { replace: true });
  });

  return (
    <div>
    </div>
  );
};

export default SignOut;