import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import styles from "../styles/MyPokeStyle";

const arr = [];

const MyPoke = () => {
  return (
    <>
      <Container css={styles.body}>
        <h1 css={styles.title}>
          <code>My Poke`mon</code>
        </h1>
        <Row>
          {arr.length !== 0 ? (
            arr.map((item) => {
              return (
                <Col sm={6} md={4} lg={3} key={item}>
                  <Card css={styles.card}>
                    <Card.Img
                      variant="top"
                      src={`${process.env.PUBLIC_URL}/samplePoke.png`}
                    />
                    <Card.Body>
                      <Card.Title>
                        <code>Name</code>
                      </Card.Title>
                      <Button css={styles.buttonRelesae} variant="danger">
                        <code>Release</code>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h3>
              <code>No Poke`mon yet</code>
            </h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MyPoke;
