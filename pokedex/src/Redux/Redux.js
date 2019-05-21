const initialState = {
  dataSource: {},
  moveItem: {}
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMON":
      return { ...state, loading: true };
    case "POKEMON_RECEIVED":
      return { ...state, dataSource: action.json, loading: false };
    case "GET_MOVE":
      return { ...state, loading: true };
    case "MOVE_RECEIVED":
      return { ...state, moveItem: action.json, loading: false };
    case "CLEAR_MOVE":
      return { ...state, moveItem: {} };
    default:
      return state;
  }
}

export const getPokemon = ID_Name => ({
  type: "GET_POKEMON",
  ID_Name
});

export const getMove = name => ({
  type: "GET_MOVE",
  name
});

export const clearMove = () => ({
  type: "CLEAR_MOVE"
});
