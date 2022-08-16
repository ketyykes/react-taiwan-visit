import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  city: "",
  amountPage: 1,
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
    changeAmountPage: (state, action) => {
      state.amountPage = Math.ceil(action.payload.length / 10);
    },
  },
});

export const { changeTitle, changeCity, changeAmountPage } =
  selectResultSlice.actions;
export default selectResultSlice.reducer;
