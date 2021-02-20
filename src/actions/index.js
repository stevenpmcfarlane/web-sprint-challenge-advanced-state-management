import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => {
  //1. start load
  //2. do our call
  //3. success on a successful call
  //4. fail on a failed call
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_LOADING });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAIL, payload: err });
      });
  };
};

export const fetchDataLoading = () => {
  return { type: FETCH_DATA_LOADING };
};

export const fetchDataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, payload: data };
};

export const fetchDataFail = (error) => {
  return { type: FETCH_DATA_FAIL, payload: error };
};

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SMURF,
      payload: { ...smurf, id: "dslkafjldk" },
    });
  };
};

export const setError = () => {
  return (dispatch) => {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "Name, position and nickname fields are required.",
    });
  };
};
