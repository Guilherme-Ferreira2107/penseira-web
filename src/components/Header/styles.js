import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  text-align: center;
  padding: 50px auto;
  color: white;

  &.blur {
    filter: blur(5px);
    pointer-events: none;
  }
`;

export const Titulo = styled.h1`
  margin: 25px auto;
`;

export const SubTitulo = styled.h4`
  margin: 5px auto;
`;
