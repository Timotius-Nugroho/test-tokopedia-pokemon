import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styles from "../styles/NavStyle";

const NavBar = (props) => {
  return (
    <Container fluid css={styles.bodyNav}>
      <Row>
        <Col sm={6}>
          <h2 css={styles.title}>Catch POKEmon</h2>
          <h6 css={styles.semiTitle}>pokemon for live !</h6>
        </Col>
        <Col className="text-end" sm={6}>
          <img
            src={`${process.env.PUBLIC_URL}/icon.png`}
            css={styles.logoNav}
            alt="icon"
          ></img>
          <span css={styles.logoText}>
            <code>`My POke`</code>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(NavBar);
