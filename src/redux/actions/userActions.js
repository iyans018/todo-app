import { SET_USER } from "../types";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: SET_USER, payload: userData });
  if (userData) {
    if (userData.role === "user") {
      history.push("/");
      return;
    }
    history.push("/admin");
    return;
  }
  history.push("/login");
};

export const logoutUser = (history) => (dispatch) => {
  dispatch({type: SET_USER, payload: null})
  history.push("/login");
} 