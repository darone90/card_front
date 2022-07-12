import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/main/Main';
import About from './views/about/About';


import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
