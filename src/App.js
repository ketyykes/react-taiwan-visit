import React, { useEffect } from "react";
import "./styles/global.scss";
import ViewRoutes from "./ViewRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);
  return <ViewRoutes />;
};

export default App;
