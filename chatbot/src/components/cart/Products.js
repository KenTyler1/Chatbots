import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
    
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  },[itemOffset, itemsPerPage, products])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="products">
      {
        currentItems.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img src={product.images[0]} alt="" />
            </Link>
            <div className="box">
              <h3 title={product.title}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <button onClick={() => addCart(product._id)}>Add to cart</button>
            </div>
          </div>
        ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
