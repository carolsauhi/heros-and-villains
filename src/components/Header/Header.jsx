import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import logo from '../../assets/Cat_Gloss.png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <img src={logo} alt="Cat Gloss Logo" className="logo" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;