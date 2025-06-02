import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {

  return (
    <header className="header">
      <h1 className="app-title">
        <span className="heroes">Heroes</span>
        <span className="and-symbol"> &amp; </span>
        <span className="villains">Villains</span>
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    </header>
  );
};

export default Header;