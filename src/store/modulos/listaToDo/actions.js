export function salvarListaToDo(lista) {
  return {
    type: "@listaToDo/salvarListaToDo",
    payload: lista,
  };
}
