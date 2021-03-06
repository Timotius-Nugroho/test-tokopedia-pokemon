import { css } from "@emotion/react";

const modulCss = {};

modulCss.body = css({
  marginTop: "115px",
  "@media (max-width: 576px)": {
    paddingTop: "32px",
  },
  marginBottom: "30px",
});

modulCss.pokeImg = css({
  padding: 2,
  width: "100%",
});

modulCss.pokeName = css({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: "50px",
});

modulCss.containerAttr = css({
  maxHeight: "200px",
  overflow: "auto",
  borderRadius: "8px",
});

modulCss.pokeAttr = css({
  fontWeight: 600,
  marginBottom: "10px",
  marginTop: "30px",
});

modulCss.attrName = css({
  fontSize: "smaller",
  margin: "2px",
});

modulCss.btnCatch = css({
  fontSize: "larger",
  margin: "2px",
  width: "100%",
  marginBottom: "30px",
});

modulCss.modal = css({
  color: "black",
});

modulCss.textInfo = css({
  color: "red",
  fontSize: "10px",
  fontStyle: "italic",
  lineHeight: 2,
  fontWeight: 600,
});

export default modulCss;
