import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default ViewRoutes