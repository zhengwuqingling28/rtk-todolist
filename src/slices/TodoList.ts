import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: [
      {
        id: 1,
        name: "Learn Yoga",
        completed: false,
        priority: "Medium",
      },
      {
        id: 2,
        name: "Learn Redux",
        completed: true,
        priority: "High",
      },
      {
        id: 3,
        name: "Learn JS",
        completed: false,
        priority: "Low",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});
