import { combineReducers } from "redux";

import fetchReducer from "./fetchReducer";
import addReducer from "./addReducer";

const reducer = combineReducers({
  fetch: fetchReducer,
  add: addReducer,
});

export default reducer;

//7. Add in a reducer case that adds in a value to the error message.
