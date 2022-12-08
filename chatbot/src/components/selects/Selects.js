import React, { useContext } from "react";
import "./SelectsStyles.css";
import SelectsImg from "../SelectsImg/SelectsImg";
import { DataContext } from "../cart/DataProvider";
import { Link } from "react-router-dom";

function Selects() {
  const value = useContext(DataContext);
  const [products] = value.products;

  const tours = [
    {
      id: 1,
      content: "Cornwall",
    },
    {
      id: 2,
      content: "Bora Bora",
    },
    {
      id: 3,
      content: "Rạn san hô Bora Bora",
    },
    {
      id: 4,
      content: "Bora Bora ATV JET",
    },
    {
      id: 5,
      content: "Maldives",
    },
    {
      id: 6,
      content: "Maldives",
    },
  ];
  return (
    <div name="views" className="selects">
      <u>
        <h2 style={{ textAlign: "center", padding: 5 }}>
          Giới thiệu các tour khác
        </h2>
      </u>
      <div className="container">
        {products.slice(13, 19).map((product) => (
          <Link to={"/products/" + product._id}>
            <SelectsImg bgImg={product.images[1]} text={product.title}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Selects;
