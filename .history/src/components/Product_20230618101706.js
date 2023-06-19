import React from "react";

const Products = (props) => {
  return (
    <article className="product">
      <h2>{props.title}</h2>
      <p className="price">${props.price}</p>
      <p>{props.description}</p>
    </article>
  );
};

export default Products;
