import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/main/Main';
import About from './views/about/About';
import Programming from './views/programming/Programming';
import Automation from './views/automation/Automation';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/programming' element={<Programming />} />
        <Route path='/automation' element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;
