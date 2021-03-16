import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";

// Styles
import { Wrapper, ItemContainer, ButtonEdit, ButtonDelete } from "./styles";

const ListItems = () => {
  const lista = useSelector((state) => state.listaToDo);
  const [handleList] = useState(lista);

  const handleDelete = (value) => {
    const newList = handleList?.listToDo.filter((item) => item.id !== value);
    store.dispatch(salvarListaToDo(newList));
  };

  return (
    <Wrapper>
      {handleList?.listToDo &&
        handleList?.listToDo.map((item, idx) => (
          <ItemContainer key={idx}>
            <TextField defaultValue={item.label} />
            <ButtonEdit onClick={() => console.log(item.id)}>Editar</ButtonEdit>
            <ButtonDelete onClick={() => handleDelete(item.id)}>
              Deletar
            </ButtonDelete>
          </ItemContainer>
        ))}
    </Wrapper>
  );
};

export default ListItems;
