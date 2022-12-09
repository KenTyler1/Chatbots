import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Data/DataProvider";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./styles.css";

export default function BasicTable() {
  const value = useContext(DataContext);
  const [products] = value.products;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const deleteProduct = async (id) => {
    console.log(id);

    let result = await fetch(`http://localhost:8000/lists/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Product deleted");
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "&:last-child td, &:last-child th": { borderBottom: 0 }}}>
            <TableCell component="th" scope="row">
              Title
            </TableCell>
            <TableCell align="center"><u>Image</u></TableCell>
            <TableCell align="center"><u>Description</u></TableCell>
            <TableCell align="right"><u>Price</u></TableCell>
            <TableCell align="right"><u>Amount</u></TableCell>
            <TableCell align="right"><u>Operation</u></TableCell>
            <TableCell align="right"><u>Update</u></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">
                <img src={product.images[0]} width={200} alt={Image} />
              </TableCell>
              <TableCell align="center">{product.description}</TableCell>
              <TableCell align="right">${product.price}</TableCell>
              <TableCell align="right">{product.count}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    var confirm = window.confirm(
                      "Bạn có chắc là xóa tour du lịch này hông ?"
                    );
                    if (confirm === true) {
                      deleteProduct(product._id);
                    } else {
                      alert("Thank you");
                    }
                  }}
                  style={{ backgroundColor: "#4ef1f1", border: "#e0e6ed", borderRadius: 10, fontSize: 15, fontWeight: "bolder" }}
                >
                  Delete
                </button>
              </TableCell>
              <TableCell align="right">
                <Link
                  to={"/products/update-products/" + product._id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Update
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell align="center">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
