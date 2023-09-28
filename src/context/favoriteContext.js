import axios from "axios";
import React, { useReducer } from "react";
export const favoriteContext = React.createContext();
//==========================================================
const API = " http://localhost:8000";

const INIT_STATE = {
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

//=============================================
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const addFavoriteToStorage = async (product) => {
    try {
      await axios.post(`${API}/favorites`, product);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavorites = async () => {
    try {
      const { data } = await axios(`${API}/favorites`);
      dispatch({
        type: "GET_FAVORITES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`${API}/favorites/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <favoriteContext.Provider
      value={{
        addFavoriteToStorage,
        removeFromFavorites,
        getFavorites,
        favorites: state.favorites,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
