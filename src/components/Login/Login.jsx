import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Form, InputGroup, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { productContext } from "../../context/productContext";
import { favoriteContext } from "../../context/favoriteContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const f = useContext(favoriteContext);
  f();

  return (
    <div className="container">
      <div className="input-container">
        <h3>Sign in</h3>
        <InputGroup className="mt-4 " style={{ width: "80%" }}>
          <Form.Control
            placeholder="email :"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mt-4 " style={{ width: "80%" }}>
          <Form.Control
            placeholder="password :"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button className="sign-in-btn" variant="primary">
          Sign in
        </Button>
        <p style={{ display: "inline" }}>
          no account ? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
