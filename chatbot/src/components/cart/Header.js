import React, { useState, useContext } from "react";
import Menu from "../../assets/svg/bars-solid.svg";
import Close from "../../assets/svg/times-solid.svg";
import Cart from "../../assets/svg/cart.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { FcHome, FcSearch, FcList } from "react-icons/fc";
import {RiAccountPinCircleFill} from 'react-icons/ri';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const [userData, setUserData] = value.data;

  console.log(setUserData);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/products">BEACHES</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/" style={{ fontWeight: "bold" }}>
            <FcHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/" style={{ fontWeight: "bold" }}>
            <FcSearch /> Search
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ fontWeight: "bold" }}>
            <FcList /> Tours
          </Link>
        </li>

        {userData ? (
          <li style={{ fontWeight: "bold" }}><RiAccountPinCircleFill /> {userData.fname}</li>
        ) : (
          <li>
            <Link to="/sign-in" style={{ fontWeight: "bold" }}>
              <RiAccountPinCircleFill /> Login / Register
            </Link>
          </li>
        )}
        <li onClick={toggleMenu}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link to="/cart">
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
}
