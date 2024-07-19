import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, complete: false });
    },
    delTask: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    editeddTask: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.editedtext };
        }
        return todo;
      }),
    completeTask: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    },
   
  },
});
export const { addTask, delTask, editeddTask, completeTask, undoTask } =
  todoSlice.actions;

export default todoSlice.reducer;
