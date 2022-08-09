import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/main/Main';
import About from './views/about/About';
import Programming from './views/programming/Programming';
import Automation from './views/automation/Automation';
import Welding from './views/welding/Welding';
import GlassPlant from './views/glassplant/GlassPlants';
import Article from './views/Article/Article';
import Login from './views/login/Login';
import Admin from './views/admin/Admin';
import Error from './views/error/Error';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/programming' element={<Programming />} />
        <Route path='/automation' element={<Automation />} />
        <Route path='/welding' element={<Welding />} />
        <Route path='/glassplant' element={<GlassPlant />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/login' element={<Login />} />
        <Route path='/error/:message' element={<Error />} />
        <Route path='/admin/*' element={<Admin />} ></Route>
        <Route path='*' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
