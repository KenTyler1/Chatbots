import React from "react";

import Link from "./Link";

const DeliveryLink = () => {
  const getUrl = () => {
    return `http://localhost:3000/products`;
  };

  return (
    <Link url={getUrl()} title={"Danh sách các tour"} />
  );
};

export default DeliveryLink;
