import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import styles from "../styles/NavStyle";

const NavBar = (props) => {
  const location = props.location.pathname;
  const moveTo = (url) => {
    props.history.push(url);
  };

  return (
    <Container fluid css={styles.bodyNav}>
      <Row>
        <Col>
          <h2
            css={styles.title}
            onClick={() => {
              moveTo("/");
            }}
          >
            Catch POKEmon
          </h2>
          <h6 css={styles.semiTitle}>
            <code>pokemon for live !</code>
          </h6>
        </Col>
        {location !== "/my-poke" ? (
          <Col className="text-end" sm={6}>
            <img
              src={`${process.env.PUBLIC_URL}/icon.png`}
              css={styles.logoNav}
              alt="icon"
              onClick={() => {
                moveTo("/my-poke");
              }}
            ></img>
            <span css={styles.logoText}>
              <code>`My POke`</code>
            </span>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default withRouter(NavBar);
