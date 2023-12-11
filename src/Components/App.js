import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Music from './Music.tsx';
import Favoris from './Favoris.js';

function App() {
  
  return (
    <>
    <Router basename = '/music-app'>
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
