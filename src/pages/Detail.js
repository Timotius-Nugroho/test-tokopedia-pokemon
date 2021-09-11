import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Modal,
  Form,
} from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import styles from "../styles/DetailStyle";

const Detail = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([false, false]);

  const catchPoke = async () => {
    setIsLoading(true);
    const prob = Math.floor(Math.random() * 10);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    if (prob > 5) {
      setModalInfo([true, true]);
      return true;
    }
    setModalInfo([true, false]);
  };

  return (
    <>
      <Container css={styles.body}>
        <Modal
          show={modalInfo[0]}
          centered
          onHide={() => {
            setModalInfo([false, false]);
          }}
        >
          <Modal.Body css={styles.modal}>
            {modalInfo[1] ? (
              <div>
                <h2>Succes get pokemon !!!</h2>
                <Form.Control type="text" placeholder="Give him a name" />
              </div>
            ) : (
              <h1>Opss!!!, please try again...</h1>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="warning"
              onClick={() => {
                setModalInfo([false, false]);
              }}
            >
              {modalInfo[1] ? "Save" : "OK"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Row>
          <Col sm={6}>
            <img
              src={`${process.env.PUBLIC_URL}/samplePoke.png`}
              alt="poke-pic"
              css={styles.pokeImg}
            ></img>
            <Button variant="danger" css={styles.btnCatch} onClick={catchPoke}>
              <code>
                {isLoading ? (
                  <div>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Count your luck...
                  </div>
                ) : (
                  "Catch the Poke`mon"
                )}
              </code>
            </Button>
          </Col>
          <Col sm={6}>
            <code>
              <h1 css={styles.pokeName}>Name</h1>
              <h3 css={styles.pokeAttr}>Moves`</h3>
              <Button variant="warning" css={styles.attrName}>
                Warning
              </Button>
              <h3 css={styles.pokeAttr}>Types`</h3>
              <Button variant="warning" css={styles.attrName}>
                Warning
              </Button>
              <h3 css={styles.pokeAttr}>Abilities`</h3>
              <Button variant="warning" css={styles.attrName}>
                Warning
              </Button>
            </code>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
