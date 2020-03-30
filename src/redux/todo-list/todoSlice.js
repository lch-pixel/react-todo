import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

export const slice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: value => ({
        payload: {
          id: nextTodoId++,
          text: value,
          isCompleted: false
        }
      })
    },
    completeTodo: (state, action) => {
      const { id } = action.payload;

      state.find(x => x.id === id).isCompleted = true;
    }
  }
});

export const { addTodo, completeTodo } = slice.actions;
export default slice.reducer;
