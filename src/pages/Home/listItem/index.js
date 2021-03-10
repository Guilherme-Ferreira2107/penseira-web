import React, { useEffect, useState } from "react";

import { Wrapper } from "./styles";

// Redux
// import { store } from "../../../store";
// import { salvarListaToDo } from "../../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";

const ListItems = ({ newRegisterData }) => {
  const [listTasks, setListTasks] = useState([]);
  const lista = useSelector((state) => state.listaToDo);

  // Recupera lista
  useEffect(() => {
    lista?.listToDo && setListTasks(lista?.listToDo);
  }, [lista]);

  // Deleta lista
  const handleDelete = (value) => {
    const newList = listTasks.filter((item) => item.id !== value);
    setListTasks(newList);
  };

  // Atualiza lista
  useEffect(() => {
    console.log(listTasks);
  }, [listTasks]);

  return (
    <Wrapper className="Item-container">
      <ul>
        {listTasks &&
          listTasks.map((item, idx) => (
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
