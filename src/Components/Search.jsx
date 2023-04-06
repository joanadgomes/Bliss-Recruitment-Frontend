import React, { useState } from 'react';
import './Search.css'

function Search() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setFilter(e.target.value);
    }

    // after submit, clean the search
    const handleSubmit = e => {
        e.preventDefault();
        setSearch("");
    }

  return (
    <div>
        <form className='form-search' onSubmit={handleSubmit}>
            <input className='input-search' type="text" placeholder='Search question' value={search} onChange={handleChange} />
            <button className='button-search' type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search;