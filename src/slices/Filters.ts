import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //IMMER : Viết code mutation nhưng vẫn được kết quả inmutaion
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
