import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Form from '../../components/admin/form/Form';
import List from '../../components/admin/list/List';
import User from '../../components/admin/user/User';
import Spinner from '../../components/common/spinner/Spinner';
import Edit from '../../components/admin/edit/Edit';
import { getter } from '../../global/connection';

import './Admin.scss';
import { useDispatch } from 'react-redux';
import { loadAll } from '../../features/errorlog-slice';
import { ErrorLog } from '../../types/errrolog-types';

const Admin = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginCheck = async () => {
        const response = await getter('login/check');
        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            if (response.actionStatus === true) {
                return
            } else {
                navigate(`/error/${response.message}`);
            };
        };
    };

    const getErrorLog = async () => {
        const response = await getter('login/error');
        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            if (response.actionStatus === true) {
                dispatch(loadAll(response.message as ErrorLog[]));
            } else {
                navigate(`/error/${response.message}`);
            };
        };
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
            setLoading(true);
            await loginCheck();
            await getErrorLog();
            setLoading(false);
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
                    <Route path='edit/:id' element={<Edit />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;