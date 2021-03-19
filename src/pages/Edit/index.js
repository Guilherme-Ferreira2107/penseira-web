import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import Button from "../../components/Button";

// Styles
import { Form, InputText, TextArea } from "./styles";

// Redux
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

const Edit = ({ itemId, setLoadingEdit }) => {
  const [item, setItem] = useState("");
  const lista = useSelector((state) => state.listaToDo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { handleSubmit, register } = useForm({
    reValidateMode: "onSubmit",
  });

  // Carrega notas
  useEffect(() => {
    lista && setItem(lista?.listToDo.filter((item) => item.id === itemId));
  }, [lista, itemId]);

  // Pega mudanças
  useEffect(() => {
    item[0]?.label && setTitle(item[0]?.label);
    item[0]?.description && setDescription(item[0]?.description);
  }, [item]);

  // Armazena novo update
  const onSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (value) => {
    setTitle(value);
  };

  const handleChangeDescription = (value) => {
    setDescription(value);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid item xs={12}>
        <InputText
          type="text"
          name="title"
          value={title}
          onChange={(event) => handleChange(event.target.value)}
          ref={register}
        />
      </Grid>
      <Grid item xs={12}>
        <TextArea
          type="text"
          name="descricao"
          value={description}
          onChange={(event) => handleChangeDescription(event.target.value)}
          placeholder="Descreva suas ideias"
          ref={register}
          rows="10"
          cols="72"
        />
      </Grid>

      <Grid container>
        <Grid item xs={8}>
          <Button
            value="Atualizar"
            type="submit"
            color="#f7f2de"
            border="#50a14f"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            value="Deletar"
            type="button"
            color="#f7f2de"
            border="#ff0000"
            onClick={() => console.log("deletar")}
          />
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Button
          value="Voltar"
          type="button"
          color="#f7f2de"
          border="#75736a"
          onClick={() => setLoadingEdit(false)}
        />
      </Grid>
    </Form>
  );
};

export default Edit;
