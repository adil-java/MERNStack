import { configureStore } from "@reduxjs/toolkit";
import { stackReducer } from "../features/renderSlice";

export const store = configureStore({
    reducer:stackReducer
})