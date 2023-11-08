import { createSelector } from "@reduxjs/toolkit";

const searchTextSelector = (state) => state.filters.search;
const filterStatusSelector = (state) => state.filters.status;
const filterPrioritiesSelector = (state) => state.filters.priority;
const todoListSelector = (state) => {
  return state.todoList.todoList;
};
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//   });
//   return todoRemaining;
// };

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length == 0
          ? todo.name.toLowerCase().includes(searchText.toLowerCase())
          : priorities.includes(todo.priority) &&
              todo.name.toLowerCase().includes(searchText.toLowerCase());
      }

      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
