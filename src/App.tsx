import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from './views/main/Main';
import About from './views/about/About';
import Programming from './views/programming/Programming';
import Automation from './views/automation/Automation';
import Welding from './views/welding/Welding';
import GlassPlant from './views/glassplant/GlassPlants';
import Article from './views/Article/Article';
import Login from './views/login/Login';
import Admin from './views/admin/Admin';
import Spinner from './components/common/spinner/Spinner';
import ErrorLog from './views/error/Error'
import Resume from './views/resume/Resume';

import './App.scss';
import { useDispatch } from 'react-redux';
import { getter } from './global/connection';
import { loadAll } from './features/article-slice';
import { ArticleListData } from './types/article-types';



function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const loadArticleList = async () => {
    setLoading(true);
    const response = await getter('user/list');
    setLoading(false);
    if (response instanceof Error) {
      navigate(`/error/${response.message}`);
    } else {
      if (response.actionStatus === true && typeof response.message !== 'string') {
        dispatch(loadAll(response.message as ArticleListData[]))
      } else {
        navigate(`/error/${response.message}`)
      };
    };
  };

  useEffect(() => {
    (async () => {
      await loadArticleList();
    })();
  }, [])

  if (loading) return <Spinner />

  return (
    <div className="App">
      <Routes>
      <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
        <Route path='/programming' element={<Programming />} />
        <Route path='/automation' element={<Automation />} />
        <Route path='/welding' element={<Welding />} />
        <Route path='/glassplant' element={<GlassPlant />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/login' element={<Login />} />
        <Route path='/error/:message' element={<ErrorLog />} />
        <Route path='/admin/*' element={<Admin />} ></Route>
        <Route path='*' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
