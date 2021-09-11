import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import styles from "../styles/MyPokeStyle";
import { RootContext } from "../App";

const MyPoke = (props) => {
  const moveToDetail = (name, artwork) => {
    props.history.push(`/detail?name=${name}&artwork=${artwork}`);
  };

  return (
    <>
      <Container css={styles.body}>
        <h1 css={styles.title}>
          <code>My Poke`mon</code>
        </h1>

        <RootContext.Consumer>
          {(value) => {
            const { state, dispatch } = value;
            return (
              <Row>
                {state.myPokeList.length !== 0 ? (
                  state.myPokeList.map((item, index) => {
                    return (
                      <Col sm={6} md={4} lg={3} key={index}>
                        <Card css={styles.card}>
                          <Card.Img
                            variant="top"
                            src={item.artwork}
                            onClick={() => {
                              moveToDetail(item.name, item.artwork);
                            }}
                          />
                          <Card.Body>
                            <Card.Title>
                              <code>{item.name}</code>
                            </Card.Title>
                            <Button
                              css={styles.buttonRelesae}
                              variant="danger"
                              onClick={() => {
                                dispatch({ type: "REMOVE_POKE", data: item });
                              }}
                            >
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
            );
          }}
        </RootContext.Consumer>
      </Container>
    </>
  );
};

export default MyPoke;
