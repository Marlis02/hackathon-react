import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import CustomCard from "../../components/Card/Card";
import { productContext } from "../../context/productContext";
import "./style.css";
import { useSearchParams } from "react-router-dom";

const MyProducts = () => {
  const { products, getProducts, deleteProduct } = useContext(productContext);
  const [serachParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, []);
  const onDelete = async (id) => {
    await deleteProduct(id);
    await getProducts();
  };
  useEffect(() => {
    getProducts(
      serachParams.get("search"),
      serachParams.get("category"),
      serachParams.get("_page")
    );
  }, [serachParams]);
  return (
    <div className="products">
      <h3 className="product-title">My products</h3>

      <div className="product-list">
        {products
          ? products.map((item) => (
              <CustomCard product={item} isUserProducts onDelete={onDelete} />
            ))
          : "Empty"}
      </div>
    </div>
  );
};

export default MyProducts;
