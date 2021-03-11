import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListItems from "../../components/ListItem";

// Styles
import { Wrapper, InputNewTask, ButtonSend } from "./styles";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";

const Home = () => {
  const [value, setValue] = useState("");
  const lista = useSelector((state) => state.listaToDo);

  const { register, handleSubmit } = useForm();

  // Armazena novo registro
  const onSubmit = (data) => {
    let newRegister = { id: Math.random(), label: data?.newValue };
    store.dispatch(salvarListaToDo(lista?.listToDo.concat(newRegister)));
    setValue("");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputNewTask
            name="newValue"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            ref={register}
            placeholder="Digite uma nova tarefa"
            required
          />
          <ButtonSend type="submit" value="Adicionar" />
        </form>
        <ListItems />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
