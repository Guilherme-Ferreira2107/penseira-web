import styled from "styled-components";

export const ButtonBasic = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    background: none;
    color: ${(props) => props.border};
  }
`;
