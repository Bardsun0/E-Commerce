import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
