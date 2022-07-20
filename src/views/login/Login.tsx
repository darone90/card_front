import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginData } from '../../types/user-types';

import Button from '../../components/common/button/Button';

import './Login.scss';


const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState<LoginData>({
        login: '',
        password: ''
    })

    const update = (e: ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const login = async () => {

    }

    return (
        <div className="Login">
            <form>
                <label>
                    login: <input type="text" name="login" onChange={update} value={data.login} />
                </label>
                <label>
                    hasło: <input type="password" name="password" onChange={update} value={data.password} />
                </label>
                <Button name='Zaloguj' className='standard' func={() => navigate('/admin')} />
            </form>
        </div>
    );
};

export default Login