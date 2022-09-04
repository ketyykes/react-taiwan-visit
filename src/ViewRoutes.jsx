import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Infinite from "./pages/Infinite/Infinite";
import NotFound from "./pages/NotFound/NotFound"

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/react-taiwan-visit/" element={<HomePage />} />
            <Route path="/search/:visitType/:city/:page" element={<Search />} />
            <Route path="/detail/:visitType" element={<Detail />} />
            <Route path="/infinite/ScenicSpot/all/:page" element={<Infinite />} />
            <Route path='/404' element={<NotFound />} />
            <Route path="*" element={<Navigate replace to='/404' />} />
        </Routes>
    )
}

export default ViewRoutes