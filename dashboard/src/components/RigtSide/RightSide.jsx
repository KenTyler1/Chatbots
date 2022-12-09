import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import {Link} from 'react-router-dom';
import {AiFillFolderAdd} from 'react-icons/ai';
import {GrUpdate} from 'react-icons/gr';

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>News</h3>
        <Updates />
        <br/>
        <Link to='/products/add-tours' style={{textDecoration: "unset", color: "black"}}><AiFillFolderAdd />&nbsp;More tours&nbsp;</Link> |
        <Link to='/products/delete-tours'style={{textDecoration: "unset", color: "black"}} >&nbsp;<GrUpdate/>&nbsp;Update & Delete</Link>
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
