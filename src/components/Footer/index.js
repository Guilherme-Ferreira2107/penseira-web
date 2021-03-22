import React from "react";
import { Wrapper } from "./styles";

const Footer = (props) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      Gostou do app? Visite me em{" "}
      <a href="https://guilherme-ferreira2107.github.io/">meu WebSite!</a>
    </Wrapper>
  );
};

export default Footer;
