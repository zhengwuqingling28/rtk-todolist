import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../slices/Filters";
import { todoListSlice } from "../slices/TodoList";

export const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
