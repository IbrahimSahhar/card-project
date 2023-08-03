import React, { Fragment } from "react";
import { ProductCart } from "../components/ProductCart";
import { products } from "../mock/products";
import { useProductContext } from "../contexts/productContext";

export const Home = () => {
  const { addToCart } = useProductContext();

  return (
    <div>
      {products.map((product) => {
        return (
          <Fragment key={product?.id}>
            <ul>
              <ProductCart product={product} />
              <li>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </li>
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
  // {
  //   context.map((product) => {
  //     return (
  //       <ul>
  //         <li>id: {product.id}</li>
  //         <li>name: {product.name}</li>
  //         <li>price: {product.price}</li>
  //         <li>description: {product.description}</li>
  //       </ul>
  //     );
  //   });
  // }
};
