import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "450px",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <h2 style={{ marginBottom: "50px" }}>About us</h2>
        <p style={{ fontSize: "22px", fontWeight: "500" }}>
          Apple store – Первый официальный авторизованный партнёр компании Apple
          в Кыргызстане со статусом Apple Authorised Reseller.
        </p>
        <p style={{ fontSize: "17px", fontWeight: "400" }}>
          В нашем магазине можно не только купить iPhone, компьютер Mac или
          планшет iPad, а также другую технику Apple и аксессуары для неё. Apple
          store – это место, в котором вам помогут с выбором техники, научат ей
          пользоваться, дадут советы по эксплуатации ваших гаджетов и предложат
          качественные аксессуары.
        </p>
      </div>
    </div>
  );
};

export default About;
