import React from "react";

// Components
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";
import InputField from "../components/Input";

// Redux

// Styles
import { ModalContent, Form } from "./styles";

const Modal = () => {
  return (
    <ModalContent>
      {/* <Form onSubmit={handleSubmit(onSubmit)}>
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
      </Form> */}
    </ModalContent>
  );
};

export default Modal;
