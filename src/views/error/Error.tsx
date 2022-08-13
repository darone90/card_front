import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/button/Button';

const Error = () => {

    const navigate = useNavigate();

    const { message } = useParams();

    return (
        <div className="error">
            wystąpił błąd: {message}
            <Button name='Pwrót' className='standard' func={() => navigate(-1)} />
        </div>
    );
};

export default Error;