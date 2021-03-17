import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
`;

export const Form = styled.form``;

export const ButtonSave = styled.input`
  width: 150px;
  height: 35px;
  border: 1px solid #50a14f;
  background: #50a14f;
  color: white;
  cursor: pointer;

  &:hover {
    background: none;
    color: #50a14f;
  }
`;

export const InputNewTask = styled.input`
  width: 100%;
  padding: 10px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
