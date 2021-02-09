// import * as types from "../types";

export const function1 = () => (dispatch) => {
  return {
    type: "Sample1"
  };
};

export const function2 = () => (dispatch) => {
  return {
    type: "Sample2"
  };
};

export const counterAction = () => (dispatch) => {
  return dispatch({
    type: "test",
    payload: ""
  });
};
