import React from "react";

export const ProductCart = ({ product }) => {
  return (
    <div>
      <li>id : {product.id}</li>
      <li>name : {product.name}</li>
      <li>price : {product.price}</li>
      <li>description : {product.description}</li>
    </div>
  );
};
