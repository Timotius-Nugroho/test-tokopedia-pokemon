/* eslint-disable no-unused-expressions */
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
import { RootContext } from "../App";

const Detail = (props) => {
  const query = new URLSearchParams(props.location.search);
  const name = query.get("name");
  const artwork = query.get("artwork");
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState([false, false]);
  const [newName, setNewName] = useState("");

  const catchPoke = async () => {
    setIsLoading(true);
    const prob = Math.floor(Math.random() * 10);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log(prob);
    if (prob > 5) {
      setModalInfo([true, true]);
      return true;
    }
    setModalInfo([true, false]);
  };

  useEffect(() => {
    getPokemon("charmander").then((res) => {
      let result = {};
      if (res === "err") {
        result = JSON.parse(localStorage.getItem("detailpoke"));
      } else {
        result = res;
        localStorage.setItem("detailpoke", JSON.stringify(res));
      }
      setAbilities(result.abilities);
      setMoves(result.moves);
      setTypes(result.types);
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
                <br />
                <Form.Control
                  type="text"
                  placeholder={`Give him a name . . .`}
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <p css={styles.textInfo}>{`Default name is "${name}"`}</p>
              </div>
            ) : (
              <h1>Opss!!!, please try again...</h1>
            )}
          </Modal.Body>

          <Modal.Footer>
            <RootContext.Consumer>
              {(value) => {
                const { dispatch, state } = value;
                const listName = state.myPokeList.map((e) => e.name);
                const pokeData = {
                  name: newName ? newName : name,
                  artwork,
                };
                return listName.includes(pokeData.name) ? (
                  <Button variant="warning" disabled>
                    Pokemon name already exists
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    onClick={() => {
                      setModalInfo([false, false]);
                      modalInfo[1]
                        ? dispatch({ type: "ADD_POKE", data: pokeData })
                        : "";
                    }}
                  >
                    {modalInfo[1] ? "Save" : "OK"}
                  </Button>
                );
              }}
            </RootContext.Consumer>
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
