import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Form from '../../components/admin/form/Form';
import List from '../../components/admin/list/List';
import User from '../../components/admin/user/User';
import Spinner from '../../components/common/spinner/Spinner';
import Edit from '../../components/admin/edit/Edit';
import { getter } from '../../global/connection';

import './Admin.scss';

const Admin = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const loginCheck = async () => {
        setLoading(true);
        const response = await getter('login/check');
        setLoading(false);
        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            if (response.actionStatus === true) {
                return
            } else {
                navigate(`/error/${response.message}`);
            }
        }
    };

    const logout = async () => {
        setLoading(true);

        const response = await getter('login');

        setLoading(false);

        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            response.actionStatus === true ? navigate('/') : navigate(`/error/${response.message}`);
        };
    };

    useEffect(() => {
        (async () => {
            await loginCheck();
        })()
    }, [])

    if (loading) return <Spinner />;

    return (
        <div className="Admin">
            <ul className="Admin__menu">
                <li><a onClick={logout}>Wyloguj</a></li>
                <li><a onClick={() => navigate('/admin/add')}>Dodaj</a></li>
                <li><a onClick={() => navigate('/admin/list/programming')}>Programowanie</a></li>
                <li><a onClick={() => navigate('/admin/list/automation')}>Automatyka</a></li>
                <li><a onClick={() => navigate('/admin/list/welding')}>Spawalnictwo</a></li>
                <li><a onClick={() => navigate('/admin/list/glass')}>Hutnictwo</a></li>
                <li><a onClick={() => navigate('/admin/user/change')}>JA</a></li>
            </ul>
            <div className="Admin__main">
                <Routes>
                    <Route path=':add' element={<Form />} />
                    <Route path=':list/:type' element={<List />} />
                    <Route path=':user/change' element={<User />} />
                    <Route path=':edit/:id' element={<Edit />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;