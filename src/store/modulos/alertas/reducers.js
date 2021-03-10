import produce from "immer";
import shortid from "shortid";

// Redux
import { store } from "../..";
import { alertaRemover } from "./actions";

const inicial = {
  alertas: [],
  confirmacao: {
    visivel: false,
    texto: "",
    titulo: "",
    textoOk: "Sim",
    textoCancelar: "Não"
  }
};

export default function alertas(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@alertas/alertaExibir": {
        action.payload.id = shortid.generate();
        draft.alertas.push(action.payload);
        setTimeout(() => {
          store.dispatch(alertaRemover(action.payload));
        }, 5000);
        break;
      }
      case "@alertas/alertaRemover": {
        const indice = draft.alertas.findIndex((alerta) => {
          return alerta.id === action.payload.id;
        });
        draft.alertas.splice(indice, 1);
        break;
      }
      case "@alertas/alertaConfirmar": {
        draft.confirmacao = {
          visivel: true,
          texto: action.payload.texto,
          textoNegrito: action.payload.textoNegrito,
          titulo: action.payload.titulo || "Atenção",
          textoOk: action.payload.textoOk || "Sim",
          textoCancelar: action.payload.textoCancelar || "Não"
        };
        break;
      }
      case "@alertas/alertaFechar": {
        draft.confirmacao = {
          visivel: false,
          texto: "",
          titulo: ""
        };
        break;
      }
      default:
        break;
    }
  });
}
