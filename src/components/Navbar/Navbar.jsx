import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { PiUserBold } from "react-icons/pi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/authContext";
import Search from "../Search/Search";

function NavScrollExample() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const { handleLogout } = useContext(authContext);
  const isAdmin = currentUser;

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  });
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ borderBottom: "1px solid grey" }}
    >
      <Container fluid>
        <Navbar.Brand href="#"> Apple</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/products");
                }}
                href="#action3"
              >
                Product list
              </NavDropdown.Item>
            </NavDropdown>
            {isAdmin && (
              <NavDropdown title="MyProducts" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/myproducts");
                  }}
                  href="#action4"
                >
                  My products
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/createproduct");
                  }}
                  href="#action5"
                >
                  Add product
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {isAdmin && (
              <Nav.Link
                onClick={() => {
                  navigate("/categories");
                }}
                style={{ color: "black" }}
              >
                Categories
              </Nav.Link>
            )}
            {isAdmin ? null : (
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
                style={{ color: "black" }}
              >
                About us
              </Nav.Link>
            )}
          </Nav>
          {/* SEARCH */}
          {isAdmin && <Search />}
          {/* favorite & cart */}
          <Nav.Link
            className="heart"
            onClick={() => {
              navigate("/favorite");
            }}
          >
            <span>
              <FiHeart size={30} />
            </span>
          </Nav.Link>
          <Nav.Link
            className="cart"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <span>
              <PiShoppingCartSimpleBold size={30} />
            </span>
          </Nav.Link>
          {/* login */}
          <Button
            variant="secondary"
            style={{
              width: "auto",
              height: "40px",
              marginRight: "10px",
            }}
          >
            {currentUser ? (
              <p style={{ display: "flex", width: "auto", margin: "0" }}>
                <PiUserBold size={25} style={{ marginRight: "5px" }} />
                {currentUser}
              </p>
            ) : (
              "no auth user"
            )}
          </Button>
          {isAdmin ? (
            <Button
              onClick={() => {
                handleLogout(navigate);
              }}
              className="login_btn"
              style={{ height: "40px" }}
            >
              {/* <span>
                <PiUserBold size={25} />
              </span> */}
              выйти
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              className="login_btn"
              style={{ height: "40px" }}
            >
              {/* <span>
                <PiUserBold size={25} />
              </span> */}
              войти
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
