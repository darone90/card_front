import React from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './modal/Modal';

import './Content.scss';

const Content = () => {

    const navigate = useNavigate();

    return (
        <div className="Content">
            <aside>
                <i onClick={() => navigate('/login')} className="fa-solid fa-dungeon Content__icon"></i>
                <strong>Dariusz Pilecki</strong>
            </aside>
            <h3>Ostatnie  projekty</h3>
            <div className="Content__modal-space">
                <Modal />
                <Modal />
            </div>
        </div>
    );
};

export default Content;