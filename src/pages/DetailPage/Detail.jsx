import "./Detail.css";
import React, { useContext, useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { productContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import { favoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";
import { CartContext } from "../../context/cartContext";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineCar } from "react-icons/ai";
import { FiNavigation } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";

//--
const Detail = () => {
  const { oneProduct, getProductById } = useContext(productContext);
  console.log(oneProduct, "sdfj");
  const { addFavoriteToStorage, favorites, getFavorites, removeFromFavorites } =
    useContext(favoriteContext);
  const { addCart, removeCart, getCart, cart } = useContext(CartContext);
  const { id } = useParams();

  const [heart, setHeart] = useState(true);

  // -------------------------------------------

  const isProductInFavorites = favorites.some(
    (favorite) => favorite.id === oneProduct.id
  );
  const isCart = cart.some((cart) => cart.id === oneProduct.id);

  ///--------------

  console.log(favorites, "dfskfakfh");
  useEffect(() => {
    getProductById(id);
    getFavorites();
  }, [id]);
  // ------------------------
  console.log(cart, "dfskfakfh");
  useEffect(() => {
    getProductById(id);
    getCart();
  }, [id]);

  const toggleFavorite = () => {
    if (isProductInFavorites) {
      removeFromFavorites(oneProduct.id);
      toast.warning("Удаленно");
    } else {
      addFavoriteToStorage(oneProduct);
      toast.success("Добавление в избранное");
    }
  };
  const toggleCart = () => {
    if (isCart) {
      removeCart(oneProduct.id);
      toast.warning("Удаленно из корзины");
    } else {
      addCart(oneProduct);
      toast.success("Добавление в корзину");
    }
  };

  //==============================================

  return (
    <div className="detail-container">
      <div className="product_info">
        <div>
          {" "}
          {oneProduct && oneProduct.image && (
            <div className="image_container">
              <Image
                className="deatil_image"
                src={oneProduct.image}
                alt="Product Image"
              />
              <span
                className="heart_d"
                onClick={() => setHeart((prev) => !prev)}
              >
                {heart ? <FiHeart size={30} /> : <FaHeart size={30} />}
              </span>
            </div>
          )}
        </div>
        <div className="product_details">
          <div>
            <p className="product_desc">{oneProduct?.description}</p>
            <p className="product_pice">{oneProduct?.price}$</p>
            <Button
              className="detail_btns"
              variant={isProductInFavorites ? "danger" : "primary"}
              onClick={toggleFavorite}
              style={{
                width: "55%",
                height: "60px",
                marginBottom: "20px",
                fontSize: "30px",
                fontWeight: "500",
                borderRadius: "50px",
              }}
            >
              {isProductInFavorites ? (
                <p>
                  Удалить из <FiHeart />
                </p>
              ) : (
                "В избранное"
              )}
            </Button>
            <Button
              className="detail_btns "
              variant={isCart ? "danger" : "primary"}
              onClick={toggleCart}
              style={{
                width: "55%",
                height: "60px",
                marginBottom: "20px",
                fontSize: "30px",
                fontWeight: "500",
                borderRadius: "50px",
              }}
            >
              {isCart ? (
                <p>
                  {" "}
                  Удалить из <LuShoppingCart />
                </p>
              ) : (
                <p>
                  Добавить в <LuShoppingCart />
                </p>
              )}
            </Button>
          </div>
          <div className="get">
            <p className="get_title">Способы получения</p>
            <div className="get_1">
              <p className="get_1_item">
                <AiOutlineCar size={20} /> Доставка в течение 24 часов с момента
                оформления
              </p>
              <p className="get_1_item2">бесплатно</p>
            </div>
            <div className="get_2">
              <p className="get_2_item">Срочная доставка в течение 2 часов</p>
              <p className="get_2_item2">от 200 с</p>
            </div>
            <div className="get_2">
              <p className="get_2_item">
                <BsBoxSeam size={20} /> Забрать в магазине
              </p>
              <p className="get_2_item2">бесплатно</p>
            </div>
            <p className="bish">
              {" "}
              <FiNavigation size={20} /> Бишкек
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
