import React from 'react';
import './SearchBar.css';
import clear from '../../assets/clear.svg'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleClear = () => setSearchTerm('');

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Type here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleClear} className="clear-button">
        <img src={clear} alt="clear button" />
      </button>
    </div>

  );
};

export default SearchBar;