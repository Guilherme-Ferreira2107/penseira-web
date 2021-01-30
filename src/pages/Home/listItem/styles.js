import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  &:focus {
    border: none;
  }
`;

export const Button = styled.button`
  background: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
`;
