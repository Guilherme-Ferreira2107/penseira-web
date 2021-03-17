import React from "react";
import { Wrapper, Titulo, SubTitulo } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Titulo>Remind App</Titulo>
      <SubTitulo>
        Armazene suas lembranças com um sistema de notificação inteligente
      </SubTitulo>
    </Wrapper>
  );
};

export default Header;
