import React from "react";
import { Link } from "react-router-dom";

const products = ["Car", "Bike", "Scooter"];

const ProductList = () => {
  const list = products.map((product) => (
    <li className="list-group-item" key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Products</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default ProductList;
