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

export default modulCss;
