import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListItems from "../../components/ListItem";
import Button from "../../components/Button";
import Edit from "../Edit";
import Grid from "@material-ui/core/Grid";

// Styles
import { Wrapper, Content, Form, InputNewTask } from "./styles";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";
import moment from "moment";

const Home = () => {
  const [value, setValue] = useState("");
  const lista = useSelector((state) => state.listaToDo);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [itemId, setitemId] = useState();

  const { register, handleSubmit } = useForm();

  // Armazena novo registro
  const onSubmit = (data) => {
    let newRegister = {
      id: Math.random(),
      label: data?.newValue,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      habilitado: true,
    };
    store.dispatch(salvarListaToDo(lista?.listToDo.concat(newRegister)));
    setValue("");
  };

  const handleUpdate = (id) => {
    setitemId(id);
    setLoadingEdit(true);
  };

  return (
    <>
      <Header />
      <Wrapper>
        {!loadingEdit ? (
          <Content>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={8}>
                <InputNewTask
                  name="newValue"
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  ref={register}
                  placeholder="Digite uma nova tarefa"
                  required
                  maxLength="30"
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  value="Adicionar"
                  type="submit"
                  color="#f7f2de"
                  border="#50a14f"
                  background="#50a14f"
                />
              </Grid>
            </Form>
            <ListItems handleUpdate={handleUpdate} />
          </Content>
        ) : (
          <Edit
            loadingEdit={loadingEdit}
            setLoadingEdit={setLoadingEdit}
            itemId={itemId}
          />
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
