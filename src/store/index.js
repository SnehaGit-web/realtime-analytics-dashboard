import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./slices/metricsSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    ui: uiReducer,
  },
});

export default store;
