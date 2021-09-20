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

  const getData = async (limit, offset, afterRender) => {
    try {
      const res = await getAllPokemon(limit, offset);
      // console.log("RESSS", res);
      setData(res.results);
      if (afterRender) {
        setPageInfo({ ...pageInfo, totalPage: Math.ceil(res.count / limit) });
      }
      localStorage.setItem("allpoke", JSON.stringify(res.results));
    } catch (error) {
      // console.log("ERR", error);
      const dataCache = JSON.parse(localStorage.getItem("allpoke"));
      setData(dataCache);
    }
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
    getData(limit, 0, true);
  }, []);

  useEffect(() => {
    const { limit, currPage } = pageInfo;
    const offset = currPage * limit - limit;
    getData(limit, offset);
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
          {data
            ? data.map((item, index) => {
                return (
                  <Col sm={6} md={4} lg={3} key={index}>
                    <Card css={styles.card}>
                      <Card.Img
                        variant="top"
                        style={{ height: "200px", marginTop: "15px" }}
                        src={item.dreamworld}
                        alt="poke-images"
                      />
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
              })
            : ""}
        </Row>
      </Container>

      <Pagination
        css={styles.pagination}
        size="sm"
        data-testid="home-pagination"
      >
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
