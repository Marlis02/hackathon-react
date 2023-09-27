import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import CustomCard from "../../components/Card/Card";
import "./style.css";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(productContext);
  const [serachParams] = useSearchParams();
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
          ? products.map((item) => <CustomCard product={item} productList />)
          : "Empty"}
      </div>
    </div>
  );
};

export default Products;
