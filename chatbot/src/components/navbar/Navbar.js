import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";

import "./NavbarStyles.css";

function Navbars() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/register/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
      });
  }, []);

  const logOut = () => {
    localStorage.clear();
    localStorage.removeItem("token");
		window.location.reload();
  };

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>BEACHES</h2>
      </div>
      <ul className="nav-menu">
        <Link to="hero" smooth={true} duration={500}>
          <li>Search</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Suggestions</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Lists</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Introduce</li>
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="nav-icons" style={{ display: "flex" }}>
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        {userData ? (
          <div class="top-menu-items">
            <ul>
              <li style={{textTransform: 'none'}}>
                {userData.fname}
                <ul class="top-menu-item">
                  <li onClick={logOut}>Logout</li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <Links to="/sign-in">
            <BsPerson className="icon" />
          </Links>
        )}
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="hero" smooth={true} duration={500}>
            <li>Search</li>
          </Link>
          <Link to="destinations" smooth={true} duration={500}>
            <li>Suggestions</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li>Lists</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Introduce</li>
          </Link>
          <Link to="footer" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
