import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="search">
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
