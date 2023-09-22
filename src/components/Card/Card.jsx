import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomCard = (product, onDelete) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <div style={{ display: "flex", gap: "10px " }}>
            <Button onClick={() => navigate("/products")}>Cancel</Button>
          </div>
        </Card.Text>
        <Card.Img className="img-card " variant="top" src={product.image} />
        <div style={{ display: "flex", gap: "10px " }}>
          <Button
            variant="primary"
            onClick={() => navigate(`/product-detail/${product.id}`)}
          >
            Details
          </Button>
          <>
            <Button variant="danger" onClick={() => onDelete(product.id)}>
              Delete
            </Button>
            <Button
              variant="warning "
              onClick={() => navigate(`/edit-product/${product.id}`)}
            >
              Edit
            </Button>
          </>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
