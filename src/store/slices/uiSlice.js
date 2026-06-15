import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark", // dark | light
  sidebarOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const selectTheme = (state) => state.ui.theme;
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;

export const { toggleTheme, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
