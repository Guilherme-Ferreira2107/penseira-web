import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import Button from "../../components/Button";

// Styles
import { Form } from "./styles";

// Redux
import { useSelector } from "react-redux";

const Edit = ({ itemId, setLoadingEdit }) => {
  const [item, setItem] = useState("");
  const lista = useSelector((state) => state.listaToDo);

  const { handleSubmit } = useForm();

  // Carrega notas
  useEffect(() => {
    lista && setItem(lista?.listToDo.filter((item) => item.id === itemId));
  }, [lista, itemId]);

  // Armazena novo update
  const onSubmit = (data) => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="label" value={item[0]?.label} />
      <input
        type="text"
        name="descricao"
        value={item[0]?.descricao}
        placeholder="Descreva"
      />

      <div>
        <Button
          value="Deletar"
          type="button"
          color="#f7f2de"
          border="#ff0000"
          onClick={() => console.log("deletar")}
        />
        <Button
          value="Atualizar"
          type="button"
          color="#f7f2de"
          border="#50a14f"
          onClick={() => console.log("Atualizar")}
        />
        <Button
          value="Voltar"
          type="button"
          color="#f7f2de"
          border="#75736a"
          onClick={() => setLoadingEdit(false)}
        />
      </div>
    </Form>
  );
};

export default Edit;
