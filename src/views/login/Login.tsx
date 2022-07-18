import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/button/Button';

import './Login.scss';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="Login">
            <form>
                <label>
                    login: <input type="text" name="login" />
                </label>
                <label>
                    hasło: <input type="password" name="password" />
                </label>
                <Button name='Zaloguj' className='standard' func={() => navigate('/admin')} />
            </form>
        </div>
    );
};

export default Login