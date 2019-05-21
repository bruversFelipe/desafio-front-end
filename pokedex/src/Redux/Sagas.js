import { put, takeLatest, all } from "redux-saga/effects";

function* fetchPokemon(state) {
  const response = yield fetch(
    `https://pokeapi.co/api/v2/pokemon/${state.ID_Name}`
  ).then(response => response.json());

  yield put({ type: "POKEMON_RECEIVED", json: response });
}

function* fetchMove(state) {
  const response = yield fetch(`https://pokeapi.co/api/v2/move/${state.name}`).then(response => response.json());

  yield put({ type: "MOVE_RECEIVED", json: response });
}

function* actionSearch() {
  yield takeLatest("GET_POKEMON", fetchPokemon);
}

function* actionSearchMove() {
  yield takeLatest("GET_MOVE", fetchMove);
}

export default function* rootSaga() {
  yield all([actionSearch(), actionSearchMove()]);
}
