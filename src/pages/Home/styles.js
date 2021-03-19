import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;

  ul li {
    list-style: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    width: 700px;
  }
`;

export const Form = styled.form`
  display: flex;
`;
