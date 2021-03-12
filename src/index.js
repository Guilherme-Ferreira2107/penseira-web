import React from "react";
import ReactDOM from "react-dom";

// App
import App from "./App";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global/globalStyle";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
