import styled from "styled-components";

export const Form = styled.form``;
export const InputText = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 10px;
  background: none;
  color: white;
  border: none;
  &:focus {
    outline: 0;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  min-width: 300px;
  padding: 10px;
  background: none;
  color: white;
  border-style: solid;
  border-width: 0 0px 1px;
  border-color: #f7f2de;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  &:focus {
    outline: 0;
  }
`;
