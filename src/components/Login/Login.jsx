import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Button, Form, InputGroup, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [eye, setEye] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { getUser, userData } = useContext(authContext);

  const login = () => {
    let loginSuccessful = false;
    for (let i of userData) {
      if (i.email === email && i.password === password) {
        loginSuccessful = true;
        localStorage.setItem("email", email);
        toast.success("Вы успешно вошли в акаунт");
        navigate("/");
        break;
      }
    }

    if (!loginSuccessful) {
      toast.error("Неверный пароль или логин");
    }
  };

  useEffect(() => {
    getUser();
    setEmail("");
    setPassword("");
  }, []);
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
        <InputGroup
          className="mt-4 "
          style={{ width: "80%", position: "relative" }}
        >
          <Form.Control
            type={eye ? "password" : "text"}
            placeholder="password :"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye" onClick={() => setEye((prev) => !prev)}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </InputGroup>

        <Button className="sign-in-btn" variant="primary" onClick={login}>
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
