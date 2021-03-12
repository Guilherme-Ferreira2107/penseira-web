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

export const Form = styled.form``;

export const ButtonSend = styled.input`
  background-image: linear-gradient(to left, #75736a 20%, #f7f2de);
  border: 0px;
  padding: 10px 35px;
`;

export const InputNewTask = styled.input`
  width: 250px;
  padding: 10px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
