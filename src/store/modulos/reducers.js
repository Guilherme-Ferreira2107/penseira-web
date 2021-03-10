import { combineReducers } from "redux";

import alertas from "./alertas/reducers";
import listaToDo from "./listaToDo/reducers";

const reducers = combineReducers({
  alertas,
  listaToDo,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
