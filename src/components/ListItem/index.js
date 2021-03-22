import React, { useEffect, useState } from "react";

// Components
import Button from "../Button";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";

// Styles
import { Wrapper, ItemContainer, Item } from "./styles";
import { Grid } from "@material-ui/core";

const ListItems = ({ handleUpdate }) => {
  const lista = useSelector((state) => state.listaToDo);
  const [handlerList, setHandlerList] = useState();

  useEffect(() => {
    lista && setHandlerList(lista.listToDo);
  }, [lista]);

  const handleDelete = (value) => {
    const newList = lista?.listToDo.filter((item) => item.id !== value);
    store.dispatch(salvarListaToDo(newList));
  };

  return (
    <Wrapper>
      {handlerList &&
        handlerList.map((item, idx) => (
          <ItemContainer key={idx}>
            <Grid container direction="row">
              <Grid item xs={7} className="labelTitle">
                <Item>
                  {item.label}
                  <p>{item.description}</p>
                </Item>
              </Grid>
              <Grid container item xs={5}>
                <Grid item xs={6}>
                  <Button
                    value="Editar"
                    type="button"
                    color="#f7f2de"
                    border="#75736a"
                    onClick={() => handleUpdate(item.id)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button
                    value="Deletar"
                    type="button"
                    color="#f7f2de"
                    border="#ff0000"
                    onClick={() => handleDelete(item.id)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </ItemContainer>
        ))}
    </Wrapper>
  );
};

export default ListItems;
