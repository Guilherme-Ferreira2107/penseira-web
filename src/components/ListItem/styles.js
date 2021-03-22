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

  & .labelTitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Item = styled.p`
  font-size: 14px;
  color: #f7f2de;
  padding: 3.3px 10px;
  border-bottom: 1px solid #75736a;

  & :focus {
    outline: none;
  }

  & p {
    font-size: 10px;
    opacity: 0.3;
  }
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
