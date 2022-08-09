import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectionType, LoginData } from '../../types/user-types';

import Button from '../../components/common/button/Button';

import './Login.scss';
import { sendData } from '../../global/connection';
import Spinner from '../../components/common/spinner/Spinner';


const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState<LoginData>({
        login: '',
        password: ''
    });

    const [info, setInfo] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const update = (e: ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const login = async () => {

        setInfo('');
        setLoading(true);

        const response = await sendData(data, 'login', ConnectionType.A);

        setLoading(false);

        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            response.actionStatus === true ? navigate('/admin/add') : setInfo(response.message);
        };
    };

    if (loading) return <Spinner />;

    return (
        <div className="Login">
            <form>
                <label>
                    login: <input type="text" name="login" onChange={update} value={data.login} />
                </label>
                <label>
                    hasło: <input type="password" name="password" onChange={update} value={data.password} />
                </label>
                <div className="Login__infobox">
                    {info}
                </div>
                <Button name='Zaloguj' className='standard' func={login} />
            </form>
        </div>
    );
};

export default Login