import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feacture/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
