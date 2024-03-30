import axios from "axios";
import React, { useReducer } from "react";
export const CartContext = React.createContext();
//==========================================================
const API = " http://localhost:8000";

const INIT_STATE = {
  cart: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

//=============================================
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const addCart = async (oneProduct) => {
    try {
      await axios.post(`${API}/cart`, oneProduct);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const { data } = await axios(`${API}/cart`);
      dispatch({
        type: "GET_CART",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCart = async (id) => {
    try {
      await axios.delete(`${API}/cart/${id}`);
      getCart();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addCart,
        removeCart,
        getCart,
        cart: state.cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
