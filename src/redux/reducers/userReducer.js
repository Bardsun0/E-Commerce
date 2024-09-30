const initialState = {
  roles: [],
  user: null,
  loading: false,
  error: null,
  addressList: [],
  creditCards: [],
  theme: "light",
  language: "en",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ROLES_REQUEST":
    case "SIGN_UP_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_ROLES_SUCCESS":
      return { ...state, roles: action.payload, loading: false };
    case "SIGN_UP_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "FETCH_ROLES_FAILURE":
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "SET_ADDRESS_LIST":
      return { ...state, addressList: action.payload };
    case "SET_CREDIT_CARDS":
      return { ...state, creditCards: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
