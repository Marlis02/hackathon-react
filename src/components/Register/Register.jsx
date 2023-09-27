import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContextProvider, { authContext } from "../../context/authContext";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const { handleRegister } = useContext(authContext);
  const navigate = useNavigate();

  const handleSumbit = async () => {
    const user = {
      email,
      password,
      confirmPasword,
    };

    // Check if passwords match

    for (const key in user) {
      if (!user[key].trim()) {
        return toast.error("Заполните все поля !");
      }
    }
    if (password !== confirmPasword) {
      return toast.error("Пароли не соавпадают!");
    }

    toast.success("Вы успешно зарегистрированы!");
    await handleRegister(user);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="input-container">
        <h3>Sign up</h3>
        <InputGroup
          className="mt-4 "
          style={{
            width: "80%",
          }}
        >
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
        <InputGroup className="mt-4 " style={{ width: "80%" }}>
          <Form.Control
            placeholder="password :"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputGroup>
        <Button
          className="sign-in-btn"
          variant="primary"
          onClick={handleSumbit}
        >
          <NavLink>Sign up</NavLink>
        </Button>
        <p style={{ display: "inline" }}>
          Have a account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
