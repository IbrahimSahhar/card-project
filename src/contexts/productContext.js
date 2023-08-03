import { createContext, useContext } from "react";
import useProductReducer from "../hooks/useProductReducer";

export const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const cart = useProductReducer();
  return (
    <productContext.Provider value={cart}>{children}</productContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => {
  const context = useContext(productContext);
  return context;
};
