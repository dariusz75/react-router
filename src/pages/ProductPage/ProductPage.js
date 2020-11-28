import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../../components";

const ProductPage = (props) => {
  console.log("props are", props);
  return (
    <>
      <Product id={props.match.params.id} />
      <Link to="/products">Back to Products</Link>
    </>
  );
};

export default ProductPage;
