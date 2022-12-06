const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleProductLoading: true,
      };
    case "GET_PRODUCTS":
      const featuredProducts = action.payload.filter((x) => {
        return x.rating > 4.8;
      });
      const brands = [...new Set(action.payload.map((item) => item.brand))];

      const finalList = ["all", ...brands];
      return {
        ...state,
        products: action.payload,
        featuredProducts:
          featuredProducts.length > 3
            ? featuredProducts.slice(0, 3)
            : featuredProducts,
        isError: false,
        isLoading: false,
        allBrands: finalList,
      };
    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        product: action.payload,
        isSingleProductError: false,
        isSingleProductLoading: false,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case "API_SINGLE_ERROR":
      return {
        ...state,
        isSingleProductError: true,
        isSingleProductLoading: false,
      };

    default:
      return state;
  }
};
export default ProductReducer;
