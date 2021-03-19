import React from "react";
import { useSelector } from "react-redux";

// Components
import Button from "../Button";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";

// Styles
import { Wrapper, ItemContainer, Item } from "./styles";
import { Grid } from "@material-ui/core";

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
            <Grid container direction="row">
              <Grid item xs={7} className="labelTitle">
                <Item>{item.label}</Item>
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
