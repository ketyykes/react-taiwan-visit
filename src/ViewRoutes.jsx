import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage, Search, Detail, Infinite, NotFound } from './pages'

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:visitType/:city/:page" element={<Search />} />
            <Route path="/detail/:visitType" element={<Detail />} />
            <Route path="/infinite/ScenicSpot/all/:page" element={<Infinite />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default ViewRoutes