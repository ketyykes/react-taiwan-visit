import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Infinite from "./pages/Infinite/Infinite";

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:visitType/:city/:page" element={<Search />} />
            <Route path="/detail/:visitType" element={<Detail />} />
            <Route path="/infinite/ScenicSpot/all/:page" element={<Infinite />} />
            <Route path="*" element={<div>404 not found</div>} />
        </Routes>
    )
}

export default ViewRoutes