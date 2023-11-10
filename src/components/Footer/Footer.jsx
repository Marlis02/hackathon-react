import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      className="page-footer font-small blue pt-4"
      style={{ height: "auto", marginTop: "50px" }}
    >
      <div
        className="container-fluid text-center text-md-left"
        style={{ height: "350px" }}
      >
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h4 className="text-uppercase footer-text">Content</h4>
            <p className="footer-text">
              В нашем магазине можно не только купить iPhone, компьютер Mac или
              планшет iPad, а также другую технику Apple и аксессуары для неё.
              Apple Store – это место, в котором вам помогут с выбором техники,
              научат ей пользоваться, дадут советы по эксплуатации ваших
              гаджетов и предложат качественные аксессуары.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0 footer-text" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase footer-text">Products</h5>
            <ul className="list-unstyled">
              <li>
                <p className="links" onClick={() => navigate("/*")}>
                  Home
                </p>
              </li>
              <li>
                <p className="links" onClick={() => navigate("/products")}>
                  Products
                </p>
              </li>
              <li>
                <p className="links" onClick={() => navigate("/about")}>
                  About us
                </p>
              </li>
              <li>
                <p className="links" onClick={() => navigate("/categories")}>
                  Categories
                </p>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase footer-text">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/">
                  <FiInstagram size={30} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=ru">
                  <AiFillTwitterCircle size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.blog/">
                  <BsGithub size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <BsLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="footer-copyright text-center py-3 footer-text"
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid white",
        }}
      >
        © 2023 Apple Store
      </div>
    </footer>
  );
};

export default Footer;
