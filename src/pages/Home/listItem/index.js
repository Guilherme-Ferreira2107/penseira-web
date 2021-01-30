import React from "react";

import { Wrapper, Input, Button } from "./styles";

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <Wrapper className="Item-container">
      <Input className="Item-field" value={value} onChange={onChange} />
      <Button onClick={onDelete}>Excluir</Button>
    </Wrapper>
  );
};

export default ListItem;
