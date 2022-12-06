const filterReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOAD_FILTER_PRODUCT":
      return {
        ...state,
        isLoadingFilterProducts: true,
      };
    case "LOADING_CATEGORY":
      return {
        ...state,
        isCategoryLoading: true,
      };

    case "IS_ERROR_FILTER_PRODUCT":
      return {
        ...state,
        isErrorFilterProducts: true,
        isLoadingFilterProducts: false,
      };
    case "API_CATEGORY_ERROR":
      return {
        ...state,
        isCategoryLoading: false,
        isCategoryError: true,
      };

    case "GET_CATEGORY":
      return {
        ...state,
        isCategoryLoading: false,
        categoryList: action.payload,
      };

    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        productList: [...action.payload],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        isGridView: action.payload,
      };

    case "GET_SORT":
      const sortVal = document.getElementById("sort");
      let val = sortVal.options[sortVal.selectedIndex].value;
      return {
        ...state,
        sortValue: val,
      };

    case "SORT_PRODUCTS":
      let newData;
      const { filterProducts } = state;
      let tempSort = [...filterProducts];
      if (state.sortValue == "asc") {
        newData = tempSort.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      } else if (state.sortValue == "desc") {
        newData = tempSort.sort(function (a, b) {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
      } else if (state.sortValue == "highest") {
        newData = tempSort.sort(function (a, b) {
          return parseFloat(b.price) - parseFloat(a.price);
        });
      } else if (state.sortValue == "lowest") {
        newData = tempSort.sort(function (a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        });
      }
      return {
        ...state,
        filterProducts: newData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { productList } = state;
      let tmpFilterProds = [...productList];

      const { searchText, category, brand, price } = state.filters;

      if (searchText) {
        tmpFilterProds = tmpFilterProds.filter((x) => {
          return x.title.toLowerCase().includes(searchText.toLowerCase());
        });
      }
      if (category) {
        tmpFilterProds =
          category === "all"
            ? tmpFilterProds
            : tmpFilterProds.filter((x) => {
                return x.category === category;
              });
      }
      if (brand) {
        tmpFilterProds =
          brand === "all"
            ? tmpFilterProds
            : tmpFilterProds.filter((x) => {
                return x.brand === brand;
              });
      }
      if (price) {
        tmpFilterProds = tmpFilterProds.filter((x) => {
          return x.price <= price;
        });
      }

      return {
        ...state,
        filterProducts: [...tmpFilterProds],
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          searchText: "",
          category: "all",
          brand: "all",
          price: 800,
        },
      };
    default:
      return state;
  }
};
export default filterReducer;
