import React from "react";
/** @jsxImportSource @emotion/react */
import styles from "../styles/HomeStyle";
// import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/pokeBanner.jpeg`}
        alt="banner"
        css={styles.banner}
      ></img>
      <h1 css={styles.title}>
        <code>Our Poke`mon</code>
      </h1>
      <h1 css={styles.title}>
        <code>Our Poke`mon</code>
      </h1>
    </>
  );
};

export default Home;
