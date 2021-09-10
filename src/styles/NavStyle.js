import { css } from "@emotion/react";

const modulCss = {};

modulCss.title = css({
  fontWeight: "bolder",
  color: "#ebe134",
});

modulCss.semiTitle = css({
  lineHeight: 0,
  marginLeft: 2,
  color: "white",
});

modulCss.bodyNav = css({
  backgroundColor: "black",
  paddingTop: 15,
  paddingBottom: 20,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: "0px 0px 20px 20px",
  position: "fixed",
  top: 0,
});

modulCss.logoText = css({
  color: "white",
  paddingLeft: 2,
  cursor: "pointer",
});

modulCss.logoNav = css({
  width: "12%",
  cursor: "pointer",
});

export default modulCss;
