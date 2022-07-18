import React from 'react';
import RickMorty from './img/rick-morty.png';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main'
import { useEffect, useState } from 'react';

function App() {

  const [services, setservices] = useState(null)

  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setservices(characterApi.results)
    
  }

  return (
    <div className="App">
      <main>
      <Main></Main>
      </main>
      <header className="App-header">
        {services ? (
        <Navigation services={services} setservices = {setservices}/>
        ) : (
          <>
            <img src={RickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={reqApi} className="btn-search">Iniciar App</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
