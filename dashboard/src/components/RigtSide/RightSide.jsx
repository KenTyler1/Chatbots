import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import {Link} from 'react-router-dom';

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <Link to='/products/add-tours' style={{textDecoration: "unset", color: "black"}}>Add Tours &nbsp;</Link>
        <Link to='/products/delete-tours'style={{textDecoration: "unset", color: "black"}} >Update & Delete Tours</Link>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
