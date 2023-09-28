import axios from "axios";
import React, { useContext, useReducer } from "react";
export const productContext = React.createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const API = "http://localhost:8000";

const INIT_STATE = {
  categories: [],
  category: null,
  pages: 0,
  products: [],
  oneProduct: null,
};
const LIMIT = 8;

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.total / LIMIT),
      };
    case "GET_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ===================CATEGORY================
  const createCategory = async (name) => {
    try {
      await axios.post(`${API}/categories`, name);
    } catch (error) {
      console.log(error);
    }
  };
  //--------------------------------------------
  const getCategories = async () => {
    try {
      const { data } = await axios(`${API}/categories`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //----------------------------------------------
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${API}/categories/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  //-----------------------------------------------

  const getCategoryById = async (id) => {
    try {
      const { data } = await axios(`${API}/categories/${id}`);
      dispatch({
        type: "GET_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCategory = async (id, data) => {
    await axios.patch(`${API}/categories/${id}`, data);
  };

  // ==================PRODUCTS===================
  const createProduct = async (product) => {
    try {
      await axios.post(`${API}/products`, product);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (search, category, _page) => {
    try {
      const res = await axios(`${API}/products?_limit=${LIMIT}`, {
        //_page=1&
        params: {
          q: search,
          ...(category ? { category } : null),
          ...(_page && { _page }),
        },
      });
      dispatch({
        type: "GET_PRODUCTS",
        payload: { data: res.data, total: res.headers["x-total-count"] },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const { data } = await axios(`${API}/products/${id}`);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (product, id) => {
    await axios.patch(`${API}/products/${id}`, product);
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productContext.Provider
      value={{
        createCategory,
        getCategories,
        categories: state.categories,
        category: state.category,
        deleteCategory,
        getCategoryById,
        handleEditCategory,
        // ================product=======
        products: state.products,
        pages: state.pages,
        oneProduct: state.oneProduct,
        createProduct,
        getProducts,
        getProductById,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
