import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Form from '../../components/admin/form/Form';
import List from '../../components/admin/list/List';
import User from '../../components/admin/user/User';

import './Admin.scss';

const Admin = () => {

    const navigate = useNavigate();

    return (
        <div className="Admin">
            <ul className="Admin__menu">
                <li><a onClick={() => navigate('/')}>Wyloguj</a></li>
                <li><a onClick={() => navigate('/admin/add')}>Dodaj</a></li>
                <li><a onClick={() => navigate('/admin/list/programming')}>Programowanie</a></li>
                <li><a onClick={() => navigate('/admin/list/automation')}>Automatyka</a></li>
                <li><a onClick={() => navigate('/admin/list/welding')}>Spawalnictwo</a></li>
                <li><a onClick={() => navigate('/admin/list/glass')}>Hutnictwo</a></li>
                <li><a onClick={() => navigate('/admin/user')}>JA</a></li>
            </ul>
            <div className="Admin__main">
                <Routes>
                    <Route path=':add' element={<Form />} />
                    <Route path=':list/:type' element={<List />} />
                    <Route path=':user' element={<User />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;