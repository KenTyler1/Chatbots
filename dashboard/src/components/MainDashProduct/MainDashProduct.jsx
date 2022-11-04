import React from "react";
import Cards from "../Cards/Cards";
import TableProduct from '../TableProduct/TableProduct';
import "./MainDashProduct.css";

const MainDashProduct = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <TableProduct />
    </div>
  );
};

export default MainDashProduct;
