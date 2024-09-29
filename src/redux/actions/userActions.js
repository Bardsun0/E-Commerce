import { roles, signUp } from "../../mockData";

export const fetchRoles = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_ROLES_REQUEST" });
    // We use roles data directly instead of API call
    dispatch({ type: "FETCH_ROLES_SUCCESS", payload: roles });
  } catch (error) {
    dispatch({ type: "FETCH_ROLES_FAILURE", payload: error.message });
  }
};

export const signUpUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "SIGN_UP_REQUEST" });
    const response = await signUp(userData);
    dispatch({ type: "SIGN_UP_SUCCESS", payload: response });
    return Promise.resolve(response);
  } catch (error) {
    dispatch({
      type: "SIGN_UP_FAILURE",
      payload: error.message || "An error occurred",
    });
    return Promise.reject(error);
  }
};
