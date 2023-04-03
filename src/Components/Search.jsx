import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setFilter(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearch("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" placeholder='Search here' value={search} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search