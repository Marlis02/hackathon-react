import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContextProvider, { authContext } from "../../context/authContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const { handleRegister } = useContext(authContext);

  const handleSumbit = () => {
    const user = {
      email,
      password,
      confirmPasword,
    };
    for (const key in user) {
      if (!user[key].trim()) {
        return alert("Заполните все поля !");
      }
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    handleRegister(user);
  };

  return (
    <div className="container">
      <div className="input-container">
        <h3>Sign up</h3>
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
          Sign up
        </Button>
        <p style={{ display: "inline" }}>
          Have a account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
