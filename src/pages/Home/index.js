import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListItems from "./listItem";

// Styles
import { Wrapper, InputNewTask, ButtonSend } from "./styles";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";

const Home = () => {
  const [listTasks, setListTasks] = useState([]);
  const [value, setValue] = useState("");

  const { register, handleSubmit } = useForm();

  // Armazena novo registro
  const onSubmit = (data) => {
    let newRegister = { id: Math.random(), label: data?.newValue };
    setListTasks(listTasks.concat(newRegister));
    setValue("");
  };

  useEffect(() => {
    store.dispatch(salvarListaToDo(listTasks));
  }, [listTasks]);

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
