import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-toastify";
import axios from "axios";
export const NavBar2 = () => {
  const [show, setShow] = useState(false);
  const [isAuthonticated,setIsAuthonaticated] = useState(Context);

  const handleLogout = async () => {
    await axios
      .get(
        "http://localhost:4000/api/v1/patient/logout", {
        withCredentials: true,
      })
      .then((result) => {
        toast.success(result.data.message);
       setIsAuthonaticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const navigateTo = useNavigate();
  const goToLogin = () => {
    navigateTo("/login");
  };
  return (
    <>
    <nav className={"container"}>
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>
            Appointment
          </Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>
            About Us
          </Link>
        </div>
        {!isAuthonticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  </>
  );
};
