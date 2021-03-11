import React, { useState } from "react";

import { Wrapper, Form, Input, Button } from "./styles";

const NewTaskInput = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const setNewTask = (target) => {
    console.log(target);
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(newItem);
  };

  return (
    <Wrapper>
      <Form onSubmit={submit}>
        <Input
          className="Todo-input"
          placeholder="Digite uma nova tarefa"
          onChange={setNewTask}
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Wrapper>
  );
};

export default NewTaskInput;
