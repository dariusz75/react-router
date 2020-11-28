import React from "react";
import { Route, Redirect } from "react-router-dom";

const Product = ({ id }) => {
  return (
    <>
      <h2>Product</h2>
      <h2>{id}</h2>
    </>
  );
};

export default Product;
