import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todos = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => ({
        payload: {
          id: nextTodoId++,
          text: text,
          isCompleted: false
        }
      })
    },
    toggleTodo: (state, action) =>
      state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      ),
    deleteTodo: (state, action) =>
      state.filter(todo => todo.id !== action.payload.id)
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todos.actions;
export default todos.reducer;
