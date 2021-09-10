import { css } from "@emotion/react";

const modulCss = {};

modulCss.title = css({
  textAlign: "center",
  fontWeight: 800,
  marginBottom: "20px",
  marginTop: "20px",
});

modulCss.banner = css({
  width: "100%",
  marginTop: "100px",
  "@media (max-width: 576px)": {
    paddingTop: "32px",
  },
});

modulCss.card = css({
  backgroundColor: "#353535",
  minWidth: "12rem",
  width: "100%",
  margin: "auto",
  textAlign: "center",
  marginBottom: 30,
});

modulCss.buttonDetail = css({
  backgroundColor: "#c79006",
  ":hover": {
    backgroundColor: "#8a6508",
  },
});

modulCss.pagination = css({
  justifyContent: "center",
  marginBottom: "40px",
  width: "100%",
});

export default modulCss;
