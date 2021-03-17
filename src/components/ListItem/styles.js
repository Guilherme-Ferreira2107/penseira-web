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
`;

export const Item = styled.p`
  color: #f7f2de;
  width: 300px;
  padding: 7.5px 20px;
  border-bottom: 1px solid #75736a;
`;

export const ButtonEdit = styled.button`
  width: 100px;
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
  width: 100px;
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
