import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  isSingleProductError: false,
  product: {},
  allBrands: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const res = await axios
        .get(url)
        .then((res) => res.data)
        .then((res) =>
          dispatch({ type: "GET_PRODUCTS", payload: res.products })
        );
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getProduct = async (url) => {
    try {
      dispatch({ type: "SET_SINGLE_LOADING" });
      const res = await axios
        .get(url)
        .then((res) => res.data)
        .then((res) => {
          dispatch({ type: "GET_SINGLE_PRODUCT", payload: res });
        });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getProduct }}>
      {children}
    </AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
