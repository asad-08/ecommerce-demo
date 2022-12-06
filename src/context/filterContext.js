import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "./../reducer/filterReducer";
import axios from "axios";

const initialState = {
  isLoadingFilterProducts: false,
  isErrorFilterProducts: false,
  filterProducts: [],
  productList: [],
  isGridView: true,
  sortValue: "asc",
  filters: {
    searchText: "",
    category: "all",
    brand: "all",
    price: 800,
  },

  isCategoryLoading: false,
  isCategoryError: false,
  categoryList: [],
};

const CATEGORY_API = "https://dummyjson.com/products/categories";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = (isGrid) => {
    dispatch({ type: "SET_GRIDVIEW", payload: isGrid });
  };
  const getCategoryList = async (url) => {
    try {
      dispatch({ type: "LOADING_CATEGORY" });
      const res = await axios
        .get(url)
        .then((res) => res.data)
        .then((res) => {
          const finalList = ["all", ...res];
          dispatch({ type: "GET_CATEGORY", payload: finalList });
        });
    } catch (error) {
      dispatch({ type: "API_CATEGORY_ERROR" });
    }
  };
  useEffect(() => {
    getCategoryList(CATEGORY_API);
  }, []);

  const clearFilter = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_FILTER" });
  };
  const handleSort = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_SORT" });
  };
  const handleFilterSearch = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        handleSort,
        handleFilterSearch,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
