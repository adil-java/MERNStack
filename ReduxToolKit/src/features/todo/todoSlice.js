import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:1,text:"Todos"}]

}
export const TodoSlice =createSlice({
    name:"todo",
    initialState,
    reducers:{// Reducer always  provides the state and action
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter(todo=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((item)=>(item.id==action.payload.id ? {...item,text:action.payload}:item))
        }
    }
})
 // final step 
 export const {addTodo,removeTodo,updateTodo}=TodoSlice.reducer;
 export default TodoSlice.reducer;