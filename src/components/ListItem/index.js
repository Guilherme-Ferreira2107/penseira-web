import React from "react";
import { useSelector } from "react-redux";

// Components
import Button from "../Button";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";

// Styles
import { Wrapper, ItemContainer, Item } from "./styles";

const ListItems = ({ handleUpdate }) => {
  const lista = useSelector((state) => state.listaToDo);

  const handleDelete = (value) => {
    const newList = lista?.listToDo.filter((item) => item.id !== value);
    store.dispatch(salvarListaToDo(newList));
  };

  return (
    <Wrapper>
      {lista?.listToDo &&
        lista?.listToDo.map((item, idx) => (
          <ItemContainer key={idx}>
            <Item>{item.label}</Item>
            <Button
              value="Editar"
              type="button"
              color="#f7f2de"
              border="#75736a"
              onClick={() => handleUpdate(item.id)}
            />
            <Button
              value="Deletar"
              type="button"
              color="#f7f2de"
              border="#ff0000"
              onClick={() => handleDelete(item.id)}
            />
          </ItemContainer>
        ))}
    </Wrapper>
  );
};

export default ListItems;
