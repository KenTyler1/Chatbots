import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";
import DetailsThumb from "./DetailsThumb";
import { Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  if (products.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Tours Empty</h2>
    );

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            <h4>Khoảng thời gian: {product.time}</h4>
            <h4>Tuổi: {product.age}</h4>
            <Sizes sizes={product.sizes} />
            <div
              className="date"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <p>{product.description}</p>
            <u>
              <b>
                <p>{product.content}</p>
              </b>
            </u>
            <h4>Số điện thoại: {product.phone}</h4> 
            <h4>Loại vé: {product.ticket}</h4>
            <h4>Ngôn ngữ: {product.tour}</h4>
            <DetailsThumb images={product.images} setIndex={setIndex} />
            <Link
              to="/cart"
              className="cart"
              onClick={() => addCart(product._id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
