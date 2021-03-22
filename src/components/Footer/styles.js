import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  color: white;

  &.blur {
    filter: blur(5px);
    pointer-events: none;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: grey;
    }
  }
`;
