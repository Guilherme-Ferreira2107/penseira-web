import produce from "immer";

const inicial = {
  listToDo: [],
};

export default function listaToDo(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@listaToDo/salvarListaToDo":
        draft.listToDo = action?.payload ?? "";
        break;
      default:
        draft = inicial;
        break;
    }
  });
}
