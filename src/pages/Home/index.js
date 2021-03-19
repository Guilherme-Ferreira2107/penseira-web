import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListItems from "../../components/ListItem";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import Edit from "../Edit";
import Grid from "@material-ui/core/Grid";

// Styles
import { Wrapper, Content, Form, Modal } from "./styles";

// Redux
import { store } from "../../store";
import { salvarListaToDo } from "../../store/modulos/listaToDo/actions";
import { useSelector } from "react-redux";

// Hooks
import { useForm } from "react-hook-form";

const Home = () => {
  const descriptionRef = useRef();
  const lista = useSelector((state) => state.listaToDo);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingPopup, setLoadingPopup] = useState(false);
  const [value, setValue] = useState("");
  const [itemId, setitemId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { register, handleSubmit } = useForm();

  // Armazena novo registro
  const onSubmit = (data) => {
    let newRegister = {
      id: Math.random(),
      label: data?.title,
      description: data?.description,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      habilitado: true,
    };
    store.dispatch(salvarListaToDo(lista?.listToDo.concat(newRegister)));
    handleClearFields();
    setLoadingPopup(false);
  };

  const onSubmitModal = (data) => {
    setLoadingPopup(true);
    setTitle(data.newValue);
    descriptionRef.current.focus();
  };

  const handleUpdate = (id) => {
    setitemId(id);
    setLoadingEdit(true);
  };

  const handleValue = (value) => {
    setValue(value);
  };

  const handleTitle = (value) => {
    setTitle(value);
  };

  const handleDescription = (value) => {
    setDescription(value);
  };

  const handleClearFields = () => {
    setValue("");
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Header />
      <Wrapper>
        {!loadingEdit ? (
          <>
            <Content className={loadingPopup && "blur"}>
              <Form onSubmit={handleSubmit(onSubmitModal)}>
                <Grid container>
                  <Grid item xs={8}>
                    <InputField
                      name="newValue"
                      type="text"
                      onChange={(e) => handleValue(e.target.value)}
                      value={value}
                      ref={register}
                      placeholder="Digite uma nova tarefa"
                      maxLength="40"
                      required
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
                </Grid>
              </Form>
              <ListItems handleUpdate={handleUpdate} />
            </Content>
            {loadingPopup && (
              <Modal>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container>
                    <Grid item xs={12}>
                      <InputField
                        name="title"
                        type="text"
                        onChange={(e) => handleTitle(e.target.value)}
                        value={title}
                        ref={register}
                        placeholder="Título"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        name="description"
                        type="text"
                        onChange={(e) => handleDescription(e.target.value)}
                        value={description}
                        ref={(register, descriptionRef)}
                        placeholder="Descrição"
                        required
                      />
                    </Grid>
                    <Grid container item>
                      <Grid item xs={8}>
                        <Button
                          value="Concluir"
                          type="submit"
                          color="#f7f2de"
                          border="#50a14f"
                          background="#50a14f"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          value="Cancelar"
                          type="submit"
                          color="#f7f2de"
                          border="#ff0000"
                          onClick={() => setLoadingPopup(false)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              </Modal>
            )}
          </>
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
