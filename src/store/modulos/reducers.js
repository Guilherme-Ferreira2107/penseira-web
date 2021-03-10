import { combineReducers } from "redux";

import listaToDo from "./listaToDo/reducers";

const reducers = combineReducers({
  listaToDo,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
