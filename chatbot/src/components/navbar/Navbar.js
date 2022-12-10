import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson, BsCardList } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaResearchgate
} from "react-icons/fa";
import {MdRecommend} from 'react-icons/md'
import {IoMdContacts} from 'react-icons/io'
import { Link } from "react-scroll";
import {CgMoreVerticalR} from 'react-icons/cg';
import { Link as Links } from "react-router-dom";
import { DataContext } from "../cart/DataProvider";

import "./NavbarStyles.css";

function Navbars() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const value = useContext(DataContext);
  const [userData] = value.data;

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
          <li><FaResearchgate/> Search</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li><MdRecommend /> Suggestions</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li><CgMoreVerticalR /> Introduce</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li><BsCardList />Tours list</li>
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          <li><IoMdContacts /> Contact</li>
        </Link>
      </ul>
      <div className="nav-icons" style={{ display: "flex" }}>
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        {userData ? (
          <div class="top-menu-items">
            <ul>
              <li style={{ textTransform: "none" }}>
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
            <li>Introduce</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li>Tours list</li>
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
