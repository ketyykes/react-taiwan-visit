import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Infinite from "./pages/Infinite/Infinite";
import NotFound from "./pages/NotFound/NotFound"

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/homepage/" element={<HomePage />} />
            <Route path="/search/:visitType/:city/:page" element={<Search />} />
            <Route path="/detail/:visitType" element={<Detail />} />
            <Route path="/infinite/ScenicSpot/all/:page" element={<Infinite />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default ViewRoutes