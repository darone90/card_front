import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Automation.scss';

const Automation = () => {

    const navigate = useNavigate()

    return (
        <div className="Automation">
            <a onClick={() => navigate('/')}>Powrót</a>
            Automatyka
        </div>
    );
};

export default Automation;
