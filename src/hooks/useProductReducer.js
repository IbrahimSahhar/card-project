import { useReducer } from "react";
import { ACTINS } from "../constant/productReducerAction";

const initialState = { count: 0, products: [] };

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTINS.ADD_TO_CART:
      return {
        ...state,
        count: state.count + 1,

        products: [...state.products, action.payload],
      };

    case ACTINS.REMOVE_TO_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const useProductReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ACTINS.ADD_TO_CART, payload: product });
  };
  const removeFromCart = (productId) => {
    dispatch({ type: ACTINS.REMOVE_TO_CART, payload: productId });
  };
  return { addToCart, removeFromCart, state };
};

export default useProductReducer;
