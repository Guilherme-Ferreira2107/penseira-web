import React from "react";
import { useSelector } from "react-redux";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";

// Styles
import {
  Wrapper,
  ItemContainer,
  Item,
  ButtonEdit,
  ButtonDelete,
} from "./styles";

const ListItems = () => {
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
            <ButtonEdit onClick={() => console.info(item.id)}>
              Editar
            </ButtonEdit>
            <ButtonDelete onClick={() => handleDelete(item.id)}>
              Deletar
            </ButtonDelete>
          </ItemContainer>
        ))}
    </Wrapper>
  );
};

export default ListItems;
