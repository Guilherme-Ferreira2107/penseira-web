import styled from "styled-components";

export const Wrapper = styled.div`
  border: none;
  margin-top: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;

  & .MuiInputBase-root {
    color: white;

    &:hover {
    }

    &:after {
      border: none;
    }
  }
`;

export const Item = styled.input`
  list-style: none;
  background: #f7f2de;
  width: 100%;
  min-width: 200px;
  padding: 10px 20px;
`;

export const ButtonEdit = styled.button`
  width: 150px;
  height: 35px;
  border: 0;
  background: #75736a;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid #75736a;
    background: none;
    color: #75736a;
  }
`;

export const ButtonDelete = styled.button`
  width: 150px;
  height: 35px;
  border: 0;
  background: red;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid red;
    background: none;
    color: red;
  }
`;
