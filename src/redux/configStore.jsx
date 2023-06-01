import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./Reducers/FormReducer";
import ListReducer from "./Reducers/ListReducer";


export const store = configureStore({
  reducer: {
    formReducer:FormReducer,
    listReducer:ListReducer,
  },
});
