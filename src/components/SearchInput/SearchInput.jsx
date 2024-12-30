import React from 'react';
import './SearchInput.css';

function SearchInput({ setQuery }) {
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search todos"
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchInput;