import React from 'react';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import Music from './Components/Music.tsx';
import Favoris from './Components/Favoris.js';

function App() {
  
  return (
    <>
    <Router basename="/music-app">
      <Routes>
      <Route path="/" exact element={<Music/>}>
      </Route>
      <Route path = "/favoris" element = {<Favoris/>}>
      </Route>
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
