/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import styles from "../styles/HomeStyle";
import { Card, Button, Container, Row, Col, Pagination } from "react-bootstrap";
import { getAllPokemon } from "../api/index";

const Home = (props) => {
  const [pageInfo, setPageInfo] = useState({
    limit: 8,
    currPage: 1,
    totalPage: 0,
    display: 4,
    pageList: [1, 2, 3, 4],
  });
  const [data, setData] = useState([]);

  const moveToDetail = (name, artwork) => {
    props.history.push(`/detail?name=${name}&artwork=${artwork}`);
  };

  const nextPage = () => {
    const { currPage, totalPage, pageList, display } = pageInfo;
    if (currPage >= 1 && currPage < totalPage) {
      setPageInfo({ ...pageInfo, currPage: currPage + 1 });
    }
    if (pageList[display - 1] === currPage && currPage < totalPage - 1) {
      setPageInfo({
        ...pageInfo,
        pageList: pageList.map((_, i) => currPage + i),
      });
    }
  };

  const prevPage = () => {
    const { currPage, totalPage, pageList } = pageInfo;
    if (currPage > 1 && currPage <= totalPage) {
      setPageInfo({ ...pageInfo, currPage: currPage - 1 });
    }
    if (pageList[0] === currPage && currPage > 1) {
      setPageInfo({
        ...pageInfo,
        pageList: pageList.map((_, i) => currPage - i).reverse(),
      });
    }
  };

  useEffect(() => {
    const { limit } = pageInfo;
    getAllPokemon(limit, 0).then((res) => {
      setPageInfo({ ...pageInfo, totalPage: Math.ceil(res.count / limit) });
      setData(res.results);
    });
  }, []);

  useEffect(() => {
    const { limit, currPage } = pageInfo;
    const offset = currPage * limit - limit;
    getAllPokemon(limit, offset).then((res) => {
      setData(res.results);
    });
  }, [pageInfo]);

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
          {data.map((item, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index}>
                <Card css={styles.card}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>
                      <code>{item.name}</code>
                    </Card.Title>
                    <Button
                      css={styles.buttonDetail}
                      onClick={() => {
                        moveToDetail(item.name, item.artwork);
                      }}
                    >
                      <code>Go To Details</code>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Pagination css={styles.pagination} size="sm">
        <Pagination.Prev onClick={prevPage} />
        {pageInfo.pageList.map((e, i) => {
          return (
            <Pagination.Item
              key={i}
              active={e === pageInfo.currPage}
              onClick={() => {
                setPageInfo({ ...pageInfo, currPage: e });
              }}
            >
              {e}
            </Pagination.Item>
          );
        })}
        <Pagination.Next onClick={nextPage} />
      </Pagination>
      <div css={styles.totalPage}>
        <code>of {pageInfo.totalPage} pages</code>
      </div>
    </>
  );
};

export default Home;
