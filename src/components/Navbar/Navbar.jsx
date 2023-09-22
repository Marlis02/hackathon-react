import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Darkness</Navbar.Brand>
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
            <NavDropdown title="MyProducts" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/editproduct");
                }}
                href="#action4"
              >
                Edit product
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
            <Nav.Link
              onClick={() => {
                navigate("/categories");
              }}
              style={{ color: "black" }}
            >
              Categories
            </Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/register");
                }}
                href="#action3"
              >
                Register
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login");
                }}
                href="#action4"
              >
                login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
