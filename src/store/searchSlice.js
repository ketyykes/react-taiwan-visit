import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  city: "",
};

export const selectResultSlice = createSlice({
  name: "selectResult",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { changeTitle, changeCity, changeAmountPage } =
  selectResultSlice.actions;
export default selectResultSlice.reducer;
