import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const renderSlice=createSlice({
    name:"stack",
    initialState:{
        stacks:[{id:1,text:"Hello"}]
    },
    reducers:{
        addText:(state,action)=>{
            const stack={
                id:nanoid(),
                text:action.payload
            }
            state.stacks.push(stack)
        }
    }
})
export const {addText}=renderSlice.actions;
export const stackReducer = renderSlice.reducer;