import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  ADD_SMURF,
} from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            id: null,
            ...action.payload,
          },
        ],
        error: null,
      };
    case FETCH_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
