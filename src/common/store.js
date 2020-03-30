import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/todo-list/todoSlice";

const store = configureStore({ reducer });

export default store;
