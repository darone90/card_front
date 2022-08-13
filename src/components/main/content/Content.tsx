import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store';



import './Content.scss';
import Modal from './modal/Modal';

const Content = () => {

    const { article } = useSelector((store: RootState) => store.article);

    const navigate = useNavigate();

    return (
        <div className="Content">
            <aside>
                <i onClick={() => navigate('/login')} className="fa-solid fa-dungeon Content__icon"></i>
                <strong>Dariusz Pilecki</strong>
            </aside>
            <h3>Ostatnie  projekty</h3>
            <div className="Content__modal-space">
                <Modal article={article[0]} />
                <Modal article={article[1]} />
            </div>
        </div>
    );
};

export default Content;