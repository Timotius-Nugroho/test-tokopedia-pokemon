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
import { getPokemon } from "../api/index";

const Detail = (props) => {
  const query = new URLSearchParams(props.location.search);
  const name = query.get("name");
  const artwork = query.get("artwork");
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([false, false]);

  const catchPoke = async () => {
    setIsLoading(true);
    const prob = Math.floor(Math.random() * 10);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    console.log(prob);
    if (prob > 5) {
      setModalInfo([true, true]);
      return true;
    }
    setModalInfo([true, false]);
  };

  useEffect(() => {
    getPokemon("charmander")
      .then((res) => {
        setAbilities(res.abilities);
        setMoves(res.moves);
        setTypes(res.types);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
                <h2>This pokemon is yours !!!</h2>
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
          <Col md={6}>
            <img src={artwork} alt="poke-pic" css={styles.pokeImg}></img>
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
          <Col md={6}>
            <code>
              <h1 css={styles.pokeName}>{name}</h1>
              <h3 css={styles.pokeAttr}>Moves`</h3>
              <div css={styles.containerAttr}>
                {moves.map((item, index) => {
                  return (
                    <Button variant="warning" css={styles.attrName} key={index}>
                      {item.move.name}
                    </Button>
                  );
                })}
              </div>
              <h3 css={styles.pokeAttr}>Types`</h3>
              <div css={styles.containerAttr}>
                {types.map((item, index) => {
                  return (
                    <Button variant="warning" css={styles.attrName} key={index}>
                      {item.type.name}
                    </Button>
                  );
                })}
              </div>
              <h3 css={styles.pokeAttr}>Abilities`</h3>
              <div css={styles.containerAttr}>
                {abilities.map((item, index) => {
                  return (
                    <Button variant="warning" css={styles.attrName} key={index}>
                      {item.ability.name}
                    </Button>
                  );
                })}
              </div>
            </code>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
