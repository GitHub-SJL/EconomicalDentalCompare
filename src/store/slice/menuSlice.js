import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  openItem: ["dashboard"],
  defaultId: "dashboard",
  openComponent: "buttons",
  drawerOpen: false,
  componentDrawerOpen: true,
};

// ==============================|| SLICE - MENU ||============================== //
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },
  },
});

export const { openDrawer } = menuSlice.actions;

export default menuSlice.reducer;
