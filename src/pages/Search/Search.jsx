import React from 'react'
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom';
const Search = () => {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(params);
    return (
        <div>SearchPage</div>
    )
}

export default Search