import React from "react";

import UrlIcon from "../assets/call.svg";

const ContactLink = () => {
  return (
    <a href="tel:0328688481" className="tel-link">
      <img className="url-icon" alt="CallIcon" src={UrlIcon} />
      <h1 className="tel-header"> Call +84 328 688 481 </h1>
    </a>
  );
};

export default ContactLink;