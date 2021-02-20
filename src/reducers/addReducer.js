import { ADD_SMURF, ERROR_MESSAGE } from "../actions";

const initialState = {
  error: "",
};

const addSmurf = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        error: null,
      };
    case ERROR_MESSAGE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addSmurf;

//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
