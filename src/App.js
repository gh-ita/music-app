import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Music from './Components/Music.js'


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Music/>}>
      </Route>
      <Route path = "/favoris" exact>
      </Route>
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
