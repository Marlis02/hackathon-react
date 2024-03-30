import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import CustomCard from "../../components/Card/Card";
import "./style.css";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import CustomPagination from "../../components/Pagination/Pagination";
import { favoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";

const Products = () => {
  const { products, getProducts } = useContext(productContext);
  // const { getFavorites, favorites, addFavoriteToStorage, removeFromFavorites } =
  //   useContext(favoriteContext);
  const [serachParams] = useSearchParams();

  //-----------------------------------------------
  // const onFavorite = async (product) => {
  //   const isFav = favorites.find((fav) => fav.id === product.id);
  //   if (isFav) {
  //     await removeFromFavorites(product.id);
  //     toast.success("removed from fav");
  //     await getFavorites();
  //   } else {
  //     await addFavoriteToStorage(product);
  //     await getFavorites();
  //     toast.success("added to fav");
  //   }
  // };
  //-----------------------------------------------
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts(
      serachParams.get("search"),
      serachParams.get("category"),
      serachParams.get("_page")
    );
  }, [serachParams]);
  return (
    <div className="products">
      <h3 className="product-title">Products list</h3>
      <div className="product-list">
        {products
          ? products.map((item) => (
              <CustomCard
                product={item}
                productList
                // favorites={favorites}
                // onFavorite={onFavorite}
              />
            ))
          : "Empty"}
      </div>
      <CustomPagination />
    </div>
  );
};

export default Products;
