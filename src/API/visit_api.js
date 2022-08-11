import axios from "axios";
export const visitInstance = axios.create({
  baseURL: `https://tdx.transportdata.tw/api/basic/v2/`,
});
