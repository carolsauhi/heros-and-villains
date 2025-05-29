import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import CardInfo from './components/CardInfo/CardInfo';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = process.env.REACT_APP_TOKEN;
  console.log(token)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `https://superheroapi.com/api.php/${token}/search/${searchTerm}`
        );
        if (response.data.response === "success") {
          setResults(response.data.results);
        } else {
          setResults([]);
          setError("Nenhum resultado encontrado.");
        }
      } catch {
        setError("Erro ao buscar.");
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchData, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <div className="app-container">
      <div className="left-panel">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="instructions">
          Digite o nome de um herói ou vilão para ver as informações.
        </p>
      </div>
      <div className="right-panel">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        <div className="cards-container">
          {results.map((item) => (
            <CardInfo key={item.id} hero={item} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
