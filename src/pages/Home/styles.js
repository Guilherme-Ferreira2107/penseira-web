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
  z-index: 1;

  &.blur {
    filter: blur(5px);
    pointer-events: none;
  }

  @media (min-width: 700px) {
    width: 700px;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Modal = styled.div`
  position: absolute;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
  margin-left: 25px;
  z-index: 2;
  border-radius: 5px;
`;
