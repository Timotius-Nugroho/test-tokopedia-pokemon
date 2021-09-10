import React from "react";
/** @jsxImportSource @emotion/react */
import styles from "../styles/HomeStyle";
import { Card, Button, Container, Row, Col, Pagination } from "react-bootstrap";

const arr = [1, 2, 3, 4, 6, 7];

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
      <Container>
        <Row>
          {arr.map((item) => {
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
                    <Button css={styles.buttonDetail}>
                      <code>Go To Details</code>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="overflow-auto">
        <Pagination css={styles.pagination} size="sm">
          <Pagination.Prev style={{ backgroundColor: "blue" }} />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item active>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  );
};

export default Home;
