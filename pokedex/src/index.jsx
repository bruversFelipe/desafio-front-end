import React from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./Themes/ThemeContext";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Redux/Sagas";
import reducers from "./Redux/Reducers";
import ConfigureRoute from "./Routes";
import { PokemonsContextProvider } from './Pages/MeusPokemons/PokemonsContext'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <PokemonsContextProvider>
        <ConfigureRoute />
      </PokemonsContextProvider>
    </ThemeContextProvider>
  </Provider>,
  document.getElementById("root")
);
