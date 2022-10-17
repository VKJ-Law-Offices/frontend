import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../layout/Navbar";

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