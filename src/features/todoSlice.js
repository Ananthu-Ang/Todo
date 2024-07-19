import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    delTask: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    editeddTask: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
        return {...todo,text:action.payload.editedtext}  
         }
         return todo
      })
  },
});
export const { addTask, delTask,editeddTask } = todoSlice.actions;

export default todoSlice.reducer;
