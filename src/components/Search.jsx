import React from 'react';
import '../styles/Search.css';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="search a character"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export { Search };
