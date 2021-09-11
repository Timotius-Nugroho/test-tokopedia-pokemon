import { css } from "@emotion/react";

const modulCss = {};

modulCss.body = css({
  marginTop: "115px",
  "@media (max-width: 576px)": {
    paddingTop: "32px",
  },
  marginBottom: "30px",
});

modulCss.title = css({
  textAlign: "center",
  fontWeight: 800,
  marginBottom: "30px",
});

modulCss.card = css({
  backgroundColor: "#353535",
  minWidth: "12rem",
  width: "100%",
  margin: "auto",
  textAlign: "center",
  marginBottom: 30,
  cursor: "pointer",
});

modulCss.buttonRelesae = css({
  width: "90%",
  marginTop: "10px",
});

export default modulCss;
