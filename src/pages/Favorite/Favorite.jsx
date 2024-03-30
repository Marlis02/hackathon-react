import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import "./favorite.css";
import { Button } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

const Favorite = () => {
  const { favorites, getFavorites, removeFromFavorites } =
    useContext(favoriteContext);

  const handleDelete = (id) => {
    removeFromFavorites(id);
    getFavorites();
  };
  console.log(favorites);
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="fav_container">
      <h3>Favorite</h3>
      <div className="fav__con_item">
        {favorites &&
          favorites.map(({ name, image, description, id }) => (
            <div className="fav_content">
              <div className="fav_img_desc">
                <img className="fav_img" src={image} alt="img" />
                <p className="fav_desc">{description}</p>
              </div>
              <Button variant="danger">
                <RiDeleteBin6Line
                  size={25}
                  onClick={() => {
                    handleDelete(id);
                  }}
                />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorite;
