import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/button/Button';

import './Error.scss';

const Error = () => {

    const navigate = useNavigate();

    const { message } = useParams();

    return (
        <div className="Error">
            <div className="Error__window">
                <h1>Oooops! Mamy problem:</h1>
                <strong>{message}</strong>
                <Button name='Powrót' className='standard' func={() => navigate(-1)} />
            </div>          
        </div>
    );
};

export default Error;