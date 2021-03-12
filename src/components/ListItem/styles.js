import styled from "styled-components";

export const Wrapper = styled.div`
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Lista = styled.ul``;

export const Item = styled.li`
  list-style: none;
  background: #f7f2de;
  width: 100%;
  min-width: 200px;
  padding: 10px 20px;
`;

export const ButtonEdit = styled.button`
  background: #75736a;
  color: white;
  border: 0px;
  padding: 5px 15px;
`;

export const ButtonDelete = styled.button`
  background: red;
  color: white;
  border: 0px;
  padding: 5px 15px;
`;
