import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";
const initialState = {
  tokenData: {},
  tokenObject: {},
  status: null,
};
const url = `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`;

const data = {
  client_id: "xi4869-9ec6640d-2382-4ea7",
  client_secret: "70b81579-a9ec-4477-ae50-a4b00b4476eb",
  grant_type: "client_credentials",
};
const config = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: qs.stringify(data),
  url,
};

export const getToken = createAsyncThunk("token/getToken", async () => {
  try {
    return await axios(config);
  } catch (error) {
    console.log(error);
  }
});
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  extraReducers: {
    [getToken.pending]: (state, action) => {
      state.status = "loading";
    },
    [getToken.fulfilled]: (state, { payload }) => {
      state.tokenData = payload;
      state.status = "success";
    },
    [getToken.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default tokenSlice.reducer;
