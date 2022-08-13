import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./pages/Search/Search";
import allCityArray from "./assets/allCityArray";

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:visitType" element={<Search />} />
            <Route path="/search/:visitType/:city" element={<Search />} />
            {/* {allCityArray.map((city, index) => {
                return (<Route key={index} path={`/search/:visitType/${city}`} element={<Search />} />)
            })} */}
            < Route path="*" element={<div>404 not found</div>} />
        </Routes>
    )
}

export default ViewRoutes