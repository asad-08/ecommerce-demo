import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const initialState = {
  cart: [],
  totalItems: "",
  totalAmount: "",
  shippingFee: 20,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id,
    color,
    price,
    product,
    clickedImage,
    count,
    amount
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, price, product, clickedImage, count, amount },
    });
  };

  const addItem = (ida) => {
    const counta = 1;
    dispatch({ type: "ADD_ITEM", payload: { ida, counta } });
  };

  const removeItem = (idr) => {
    const countr = 1;
    dispatch({ type: "REMOVE_ITEM", payload: { idr, countr } });
  };

  const removeFromCart = (idtoremove) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { idtoremove } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        addItem,
        removeItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
