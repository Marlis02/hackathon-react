import React, { useContext, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { productContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const { oneProduct, getProductById } = useContext(productContext);
  console.log(oneProduct);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [id]);

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
            </div>
          )}
        </div>
        <div className="product_details">
          <p className="product_desc">{oneProduct?.description}</p>
          <Button className="detail_btns" style={{ borderRadius: "50px" }}>
            Купить
          </Button>
          <Button className="detail_btns" style={{ borderRadius: "50px" }}>
            В избранное
          </Button>
          <Button className="detail_btns" style={{ borderRadius: "50px" }}>
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
// import React from "react";

// const Detail = () => {
//   return (
//     <div>
//       <h3>Detail</h3>
//     </div>
//   );
// };

// export default Detail;
