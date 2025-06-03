import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import CardInfo from './components/CardInfo/CardInfo';
import Footer from './components/Footer/Footer';
import useDebounce from './hooks/useDebounce';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const token = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setCharacters([]);
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://superheroapi.com/api.php/${token}/search/${debouncedSearchTerm}`
        );
        if (response.data.response === 'success') {
          setCharacters(response.data.results);
        } else {
          setCharacters([]);
          setError('Nenhum resultado encontrado.');
        }
      } catch (err) {
        setError('Erro ao buscar personagens.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [debouncedSearchTerm]);

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <aside className="sidebar">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* <InfoText /> */}
        </aside>

        <main className="content">
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}
          <div className="card-list">
            {characters.map((character) => (
              <CardInfo key={character.id} hero={character} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
