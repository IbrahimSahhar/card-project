import React from "react";
import { useProductContext } from "../contexts/productContext";
import { ProductCart } from "../components/ProductCart";

export const Cart = () => {
  const { state } = useProductContext();
  const { removeFromCart } = useProductContext();

  return (
    <>
      {state.count
        ? state.products.map((product) => {
            return (
              <ul key={product.id}>
                <li>
                  <ProductCart key={product.id} product={product} />
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove From Cart
                  </button>
                </li>
              </ul>
            );
          })
        : "No Product In The Cart"}

      <p>Product count : {state.count}</p>
      <p>
        Total Price :
        {state.products.reduce((acc, current) => acc + current.price, 0)}
      </p>
    </>
  );
};
