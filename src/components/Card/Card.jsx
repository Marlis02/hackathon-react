import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import "./style.css";

const CustomCard = ({
  product,
  isUserProducts,
  onDelete,
  detailPage,
  productList,
  onFavorite,
  favorites,
}) => {
  const navigate = useNavigate();

  const [heart, setHeart] = useState(false);
  //--------------------favorite----------------------

  return (
    <div>
      <Card
        className="card"
        style={{ width: "320px", height: "500px", border: "none" }}
      >
        <div className="card-img-container" style={{ height: "320px" }}>
          <Card.Img
            className="img-card "
            variant="top"
            src={product.image}
            onClick={() => navigate(`/detail/${product.id}`)}
          />
        </div>
        <Card.Body className="card-body">
          <Card.Text
            style={{ marginBottom: "5px", fontSize: "18px", fontWeight: "500" }}
          >
            {product.price} $
          </Card.Text>
          <Card.Title
            style={{ marginBottom: "5px", fontSize: "16px", color: "grey" }}
          >
            {product.description}
          </Card.Title>
          {/* <Card.Text>Category: {product.category}</Card.Text> */}
          <div style={{ display: "flex", gap: "10px " }}>
            {isUserProducts && (
              <>
                <Button
                  style={{ height: "45px" }}
                  variant="danger"
                  onClick={() => onDelete(product.id)}
                >
                  <RiDeleteBin6Line size={20} />
                </Button>
                <Button
                  variant="warning "
                  onClick={() => navigate(`/editproduct/${product.id}`)}
                >
                  <FiEdit3 size={20} />
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
