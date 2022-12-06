const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, price, product, clickedImage, count, amount } =
        action.payload;
      const cartItem = {
        id: id + color,
        title: product.title,
        color,
        price: product.price,
        image: clickedImage,
        max: product.stock,
        count,
        amount,
      };
      return {
        ...state,
        cart: [...state.cart, cartItem],
      };

    case "ADD_ITEM":
      const { ida, counta } = action.payload;
      return {
        ...state,
        cart: [...state.cart].map((x) => {
          if (x.id === ida) {
            return {
              ...x,
              count: x.count + counta,
            };
          }
          return x;
        }),
      };

    case "REMOVE_ITEM":
      const { idr, countr } = action.payload;
      return {
        ...state,
        cart: [...state.cart].map((x) => {
          if (x.id === idr) {
            return {
              ...x,
              count: x.count == 0 ? 0 : x.count - countr,
            };
          }
          return x;
        }),
      };
    case "REMOVE_ITEM_FROM_CART":
      const { idtoremove } = action.payload;
      return {
        ...state,
        cart: [...state.cart].filter((x) => x.id != idtoremove),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
export default CartReducer;
