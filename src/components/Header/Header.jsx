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

      <hr />
      <p className="header-description">
        A project created to practice React, state manipulation and API calls — with an epic twist! Here you can search for heroes and villains from the comics, while I learn (and have fun) creating a modern, responsive and functional interface.
      </p>

    </header>
  );
};

export default Header;