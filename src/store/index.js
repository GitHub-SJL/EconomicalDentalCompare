import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slice/menuSlice";
export default configureStore({
  reducer: {
    menu: menuSlice,
  },
});
