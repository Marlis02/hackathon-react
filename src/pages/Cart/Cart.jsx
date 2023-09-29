import React, { useContext, useEffect, useState } from "react";
import { favoriteContext } from "../../context/favoriteContext";

import { Button, Modal } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../../context/cartContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { removeCart, getCart, cart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [a, setAa] = useState("");
  const [b, setBb] = useState("");
  const [c, setCc] = useState("");
  const [d, setDd] = useState("");

  const handleDelete = (id) => {
    removeCart(id);
    getCart();
  };

  console.log(cart, "aaaa");
  useEffect(() => {
    getCart();
  }, []);

  const buy = () => {
    setShow(true);
  };

  const buyNow = () => {
    if (!a.trim() || !b.trim() || !c.trim() || !d.trim()) {
      toast.warning("Заполните все поля");
    } else {
      setShow(false);
      toast.success("Ваш заказ в обработке");
    }
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="fav_container">
      <h3>Cart</h3>
      <div className="fav__con_item">
        {cart &&
          cart.map(({ price, image, description, id }) => (
            <div className="fav_content" key={id}>
              <div className="fav_img_desc">
                <img className="fav_img" src={image} alt="img" />
                <p className="fav_desc">{description}</p>
              </div>
              <div style={{ fontSize: "20px", fontWeight: "600" }}>
                {price} $
              </div>
              <div>
                <Button variant="danger">
                  <RiDeleteBin6Line
                    size={25}
                    onClick={() => {
                      handleDelete(id);
                    }}
                  />
                </Button>
                <Button
                  style={{ height: "40px", marginLeft: "20px" }}
                  onClick={buy}
                >
                  Купить
                </Button>
              </div>
            </div>
          ))}
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Купить товар
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ margin: "0" }}>Номер карты :</p>
          <input
            style={{
              width: "100%",
              height: "35px",
              paddingLeft: "10px",
              borderRadius: "3px",
            }}
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={(e) => setAa(e.target.value)}
          />
          <div style={{ margin: "0", display: "flex" }}>
            <div style={{ marginRight: "30px" }}>
              <p style={{ margin: "0" }}>Срок действия :</p>{" "}
              <input
                style={{
                  width: "100%",
                  height: "35px",
                  paddingLeft: "10px",
                  borderRadius: "3px",
                }}
                type="text"
                placeholder="01 / 20"
                onChange={(e) => setBb(e.target.value)}
              />
            </div>
            <div>
              <p style={{ margin: "0" }}>CVC/CVV :</p>
              <input
                style={{
                  width: "100%",
                  height: "35px",
                  paddingLeft: "10px",
                  borderRadius: "3px",
                }}
                type="password"
                placeholder="123"
                onChange={(e) => setCc(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p style={{ margin: "0" }}>ФИО владельца карты :</p>
            <input
              style={{
                width: "100%",
                height: "35px",
                paddingLeft: "10px",
                borderRadius: "3px",
              }}
              type="text"
              placeholder=". . ."
              onChange={(e) => setDd(e.target.value)}
            />
          </div>
          <div>
            <p style={{ margin: "0" }}>Регион :</p>
            <input
              style={{
                width: "100%",
                height: "35px",
                paddingLeft: "10px",
                borderRadius: "3px",
              }}
              type="text"
              placeholder="город/район/село"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button variant="primary" onClick={buyNow}>
            Купить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
