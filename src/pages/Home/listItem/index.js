import React from "react";

import { Wrapper } from "./styles";

// Redux
import { store } from "../../../store";
import { salvarListaToDo } from "../../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";

const ListItems = () => {
  const lista = useSelector((state) => state.listaToDo);

  const handleDelete = (value) => {
    const newList = lista?.listToDo.filter((item) => item.id !== value);
    store.dispatch(salvarListaToDo(newList));
  };

  return (
    <Wrapper className="Item-container">
      <ul>
        {lista?.listToDo &&
          lista?.listToDo.map((item, idx) => (
            <div key={idx}>
              <li>{item.label}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
      </ul>
    </Wrapper>
  );
};

export default ListItems;
