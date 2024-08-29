// Create a set of global store for state management using redux-tool kit
import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { todoReducer } from "../features/todo/todoSlice";
export const store=configureStore({
    reducer:todoReducer
})
