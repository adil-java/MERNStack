import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
  name: "todo",
 initialState: {
    todos: [{ id: 1, text: "Todos" }]
  }
  ,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? { ...item, text: action.payload.text } : item
      );
    },
  },
});

// Corrected export statement
export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;
