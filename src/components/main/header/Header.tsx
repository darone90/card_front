import React from 'react';

import './Header.scss';

const Header = () => {
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
                <li><a href="">O mnie</a></li>
                <li><a href="">Programowanie</a></li>
                <li><a href="">Automatyka</a></li>
                <li><a href="">Spawalnictwo</a></li>
                <li><a href="">Hutnictwo</a></li>
            </ul>
        </div>
    );
};

export default Header;
