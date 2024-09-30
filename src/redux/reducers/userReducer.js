const initialState = {
  roles: [],
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ROLES_REQUEST":
      return { ...state, loading: true, error: null };
    case "SIGN_UP_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_ROLES_SUCCESS":
      return { ...state, roles: action.payload, loading: false };
    case "SIGN_UP_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "FETCH_ROLES_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
