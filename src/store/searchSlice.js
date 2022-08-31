import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  theme: "",
};

export const selectResultSlice = createSlice({
  name: "selectResult",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { changeTitle } = selectResultSlice.actions;
export default selectResultSlice.reducer;
