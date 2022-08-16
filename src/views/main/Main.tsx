import React from 'react';

import Header from '../../components/main/header/Header';
import Content from '../../components/main/content/Content';

import './Main.scss';
const Main = () => {

    return (
        <div className="Main">
            <Header />
            <Content />
        </div>
    );
};

export default Main;