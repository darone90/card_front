import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="Header">
            <div className="Header__main-image"></div>
            <aside>
                <a href="https://github.com/darone90/" className="Header__github"></a>
                <strong>Checkout my</strong>
            </aside>
            <div className="Header__logo">
                <strong>techniczny</strong>
                <strong>pl</strong>
            </div>
            <h1>Każdy problem jest do rozwiązania</h1>
            <div className="Header__gold"></div>
            <div className="Header__white"></div>
            <h3>wystarczy trochę <strong>pomyśleć</strong></h3>
            <ul className="Header__menu">
                <li onClick={() => navigate('/about')}><a>O mnie</a></li>
                <li><a onClick={() => navigate('/programming')}>Programowanie</a></li>
                <li><a onClick={() => navigate('/automation')}>Automatyka</a></li>
                <li><a onClick={() => navigate('/welding')}>Spawalnictwo</a></li>
                <li><a onClick={() => navigate('/glassplant')}>Hutnictwo</a></li>
            </ul>
        </div>
    );
};

export default Header;
