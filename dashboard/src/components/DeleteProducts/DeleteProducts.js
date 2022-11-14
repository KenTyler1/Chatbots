import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { DataContext } from "../../Data/DataProvider";
import {Link} from 'react-router-dom';


export default function BasicTable() {
  const value = useContext(DataContext);
  const [products] = value.products;

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Operation</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
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
                      "Are you sure to delete tour ?"
                    );
                    if (confirm === true) {
                      deleteProduct(product._id);
                    } else {
                      alert("Thank you");
                    }
                  }}
                  style={{backgroundColor: '#4ef1f1', border: '#e0e6ed'}}
                >
                  Delete
                </button>
              </TableCell>
              <TableCell align="right">
                <Link to={"/products/update-products/"+ product._id} style={{textDecoration: 'none', color: "black"}}>Update</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
